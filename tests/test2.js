// tests/test2.js
console.log('Running Test 2...');
const result = 'hello' + ' ' + 'world';
if (result !== 'hello world') {
  console.error(`Test 2 Failed: Expected concatenation to be 'hello world', but got ${result}`);
  process.exit(1); // Exit with error code
}
console.log('Test 2 Passed.'); 