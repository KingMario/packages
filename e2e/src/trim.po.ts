import {
  browser,
  by,
  element,
} from 'protractor';

export class TrimPage {
  navigateTo () {
    return browser.get('./trim');
  }

  getFieldA () {
    return element(by.xpath('/html/body/app-root/app-trim-sample/div/input[1]'));
  }

  async getFieldAValue () {
    return await this.getFieldA().getAttribute('value');
  }

  getFieldB () {
    return element(by.xpath('/html/body/app-root/app-trim-sample/div/input[2]'));
  }

  async getFieldBValue () {
    return await this.getFieldB().getAttribute('value');
  }

  getSubmitButton () {
    return element(by.xpath('/html/body/app-root/app-trim-sample/button'));
  }
}
