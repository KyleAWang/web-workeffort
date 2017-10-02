import { By, Key } from 'selenium-webdriver';
import GoogleContainer from '../containers/GoogleContainer';

class GoogleView {
  constructor(driver) {
    this.driver = driver;
    this.googleContainer = new GoogleContainer(driver);
    this.searchKey = this.searchKey.bind(this);
  }

  searchKey(next, searchQuery) {
    // this.driver.findElement(By.name('q'))
    //   .sendKeys(searchQuery);
    // this.driver.findElement(By.name('q'))
    //   .sendKeys(Key.ENTER)
    //   .then(function() {
    //     next();
    //   });
    this.googleContainer
      .searchKey
      .sendKeys(searchQuery);
    this.googleContainer
      .searchKey
      .sendKeys(Key.ENTER)
      .then(() => next());
  }
}

export default GoogleView;
