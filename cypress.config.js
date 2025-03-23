const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight:720,
    viewportWidth:1270,
    defaultCommandTimeout:10000,
    pageLoadTimeout:30000,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: './results',
      overwrite: false,
      reportFilename: "[name]",
      html: true,
      json: true,
      inlineAssets: true,
      charts: true,
    },
    
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
      // implement node event listeners here
    },
  },
});
