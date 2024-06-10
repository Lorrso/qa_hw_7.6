const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1366, // 360
    viewportHeight: 768, // 640
  },
});

// Для запуска с данной конфигурацией необходимо использовать команду npx cypress open --config-file cypress.laptop.config.js