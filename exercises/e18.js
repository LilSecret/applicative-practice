import { maxBy } from "../exercises/e17";
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // I didn't know how to get the amount of times an asteroid was discovered in the years
  // but I found a video that should me how to get the the most common item in an array
  let asteroidYears = [];
  for (let asteroid of data.asteroids) {
    asteroidYears.push(asteroid.discoveryYear);
  }
  
  const occur = {};
  
  asteroidYears.map((val) => {
    occur[val] = occur[val] + 1 || 1;
  });
  
  let year = Object.keys(occur);
  let value = Object.values(occur);
  let most = Math.max(...value);
  let index = value.findIndex((val) => {
    return val === most;
  })
  
  return +year[index];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
