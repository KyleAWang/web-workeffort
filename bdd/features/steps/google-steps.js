import { defineSupportCode } from 'cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

import GoogleView from '../views/googleView';

defineSupportCode(({ When, Then }) => {
  When(/^I search Google for '(\w*)'$/, function (searchQuery, next) {
    this.driver.get('https://www.google.co.nz/');
    const gv = new GoogleView(this.driver);
    gv.searchKey(next, searchQuery);
  });

  Then(/^I should see some results$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('div.g')));
    this.driver.findElements(By.css('div.g'))
      .then((elements) => {
        expect(elements.length).to.not.equal(0);
        next();
      });
  });
});
