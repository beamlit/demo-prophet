# PineappleCo E-commerce Website

A modern, responsive e-commerce website for a fictional company selling pineapples and pineapple-related products.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Product catalog with filtering, sorting, and search
- Product detail pages with related products
- Shopping cart functionality
- About and Contact pages
- Modern UI with Tailwind CSS

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework for production
- [React 19](https://react.dev/) - JavaScript library for building user interfaces
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pineappleco.git
cd pineappleco
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/
├── public/            # Static assets like images
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   └── data/          # Mock data for the store
└── ...
```

## Note About Images

For a production site, you would need to add real product images to the `/public/images/` directory. The current code references image paths that aren't included in this repository.

## License

This project is licensed under the MIT License.

## Acknowledgements

- This is a demonstration project showing an implementation of a modern e-commerce website using Next.js and React.
- All product information is fictional and used for demonstration purposes only.
