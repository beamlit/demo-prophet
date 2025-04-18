// tests/test3.js
console.log('Running Test 3...');
const result = 5 * 5;
// Intentionally incorrect assertion to make the test fail
if (result !== 20) {
  console.error(`Test 3 Failed: Expected 5 * 5 to equal 20, but got ${result}`);
  process.exit(1); // Exit with error code
}
// This line won't be reached because the process exits above
console.log('Test 3 Passed.'); 