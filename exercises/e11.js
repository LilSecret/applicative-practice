import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  const planetsUnder10Moons = data.planets
    .filter((planet) => {
      if (planet.hasOwnProperty('moons')) {
        if (planet.moons.length < 10) {
          return planet;
        }
      }
      if (!planet.hasOwnProperty('moons')) {
        return planet;
      }
    })
    .map((planet) => {
      return planet.name;
    });
  
  return planetsUnder10Moons;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
