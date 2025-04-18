import { BlaxelMcpClientTransport, BlaxelMcpServerTransport, env } from "@blaxel/sdk";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Helper function to convert JSON Schema to Zod schema
function jsonSchemaToZod(schema: any): Record<string, z.ZodTypeAny> {
  if (!schema || typeof schema !== 'object' || schema.type !== 'object' || !schema.properties) {
    return {};
  }
  
  const properties: Record<string, z.ZodTypeAny> = {};
  
  Object.entries(schema.properties).forEach(([key, value]: [string, any]) => {
    if (value.type === 'string') {
      properties[key] = z.string();
    } else if (value.type === 'number') {
      properties[key] = z.number();
    } else if (value.type === 'boolean') {
      properties[key] = z.boolean();
    } else if (value.type === 'array') {
      console.log(value);
      if (value.items.type === 'integer') {
        properties[key] = z.array(z.number());
      } else {
        properties[key] = z.array(z.any());
      }
    } else if (value.type === 'object') {
      properties[key] = z.object(jsonSchemaToZod(value));
    } else {
      properties[key] = z.any();
    }
  });
  
  return properties;
}

const server = new McpServer({
  name: "mcp-nextjs-dev-env",
  version: "1.0.0",
  description: "",
});

// Get the Blaxel MCP URL from environment variables or use a default
const blaxelMcpUrl = env.SANDBOX_URL;

const clientTransport = new BlaxelMcpClientTransport(
  blaxelMcpUrl
);

const client = new Client(
  {
    name: "mcp-client",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);


async function main() {
  let transport;
  if (process.env.BL_SERVER_PORT) {
    transport = new BlaxelMcpServerTransport();
  } else {
    transport = new StdioServerTransport();
  }
  await client.connect(clientTransport);
  const {tools} = await client.listTools();
  for (const tool of tools) {
    // Create a default empty schema if inputSchema is null or invalid
    const zodSchema = tool.inputSchema ? jsonSchemaToZod(tool.inputSchema) : {};
    
    server.tool(tool.name, tool.description, zodSchema, async (params) => {
      await client.connect(clientTransport);
      try {
        const result = await client.callTool({
          name: tool.name,
          arguments: params
        });
        await client.close();
        return result;
      } catch (error) {
        console.error(error);
        await client.close();
        return {
          error: "An error occurred while calling the tool"
        };
      }
    });
  }
  await client.close();
  server.connect(transport);
}

main();
