const { chromium } = require("@playwright/test");

module.exports = {
  defaults: {
    standard: "WCAG2AA",
    timeout: 30000,
    chromeLaunchConfig: {
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || chromium.executablePath(),
      args: ["--no-sandbox", "--disable-dev-shm-usage"]
    }
  },
  urls: ["http://127.0.0.1:4173/"]
};
