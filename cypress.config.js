const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bi7q7p',

  viewportHeight: 800,
  viewportWidth: 1200,
  e2e: {
    baseUrl: 'https://tapsshop.pl/',
    setupNodeEvents(on, config) {
    },
  },
});
