const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 660,
    viewportHeight: 550,
    experimentalStudio: true
  },
});


require('@applitools/eyes-cypress')(module);
