const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // to make cypress excute the tests not from the default e2e folder
    //specPattern :'cypress/testcases/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 
  },
});
