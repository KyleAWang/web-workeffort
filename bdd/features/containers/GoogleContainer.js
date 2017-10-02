import { By } from 'selenium-webdriver';
class GoogleContainer {
  constructor(driver) {
    this.driver = driver;
    this.searchKey = this.driver.findElement(By.name('q'));
  }
}

export default GoogleContainer;
