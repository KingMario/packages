import { browser, by, element } from 'protractor';

export class TrimPage {
  navigateTo() {
    return browser.get('/trim');
  }

  getFieldA() {
    return element(by.xpath('/html/body/app-root/app-trim-sample/div/input[1]'));
  }

  getFieldAValue() {
    return element(by.xpath('/html/body/app-root/app-trim-sample/div/div[1]/pre')).getText();
  }

  getFieldB() {
    return element(by.xpath('/html/body/app-root/app-trim-sample/div/input[2]'));
  }

  getFieldBValue() {
    return element(by.xpath('/html/body/app-root/app-trim-sample/div/div[2]/pre')).getText();
  }

  getSubmitButton () {
    return element(by.xpath('/html/body/app-root/app-trim-sample/button'));
  }
}
