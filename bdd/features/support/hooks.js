import { defineSupportCode } from 'cucumber';

defineSupportCode(function ({After}) {
  After(function () {
    this.driver.quit();
  });
});
