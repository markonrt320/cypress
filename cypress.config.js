const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com/',
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      authToken: "496279a9fb9e3ee0dc5af3df33f08b890c9ab85480e2d45ac15742d335f57b26",
      userMail: 'kevin@gmail.com',
      userName : "Kevin"
    },
  },
});
