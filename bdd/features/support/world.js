import { defineSupportCode } from 'cucumber';
import { Builder } from 'selenium-webdriver';
import fs from 'fs';
import 'chromedriver';

const platform = process.env.PLATFORM || 'CHROME';

const buildChromeDriver = function () {
  return new Builder().forBrowser('chrome').build();
};

const buildFirefoxDriver = function () {
  return new Builder().forBrowser('firefox').build();
};

const buildDriver = function () {
  switch (platform) {
    case 'FIREFOX':
      return buildFirefoxDriver();
    default:
      return buildChromeDriver();
  }
};

defineSupportCode(({ setDefaultTimeout }) => {
  setDefaultTimeout(60 * 1000);
});

const World = function World() {
  const screenshotPath = 'screenshots';
  this.driver = buildDriver();

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
};

defineSupportCode(function ({ setWorldConstructor }) {
  setWorldConstructor(World);
});
