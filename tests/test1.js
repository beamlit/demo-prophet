// tests/test1.js
console.log('Running Test 1...');
const result = 1 + 1;
if (result !== 2) {
  console.error(`Test 1 Failed: Expected 1 + 1 to equal 2, but got ${result}`);
  process.exit(1); // Exit with error code
}
console.log('Test 1 Passed.'); 