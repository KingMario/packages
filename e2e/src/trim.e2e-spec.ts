import { TrimPage } from './trim.po';
import { protractor } from 'protractor';

const value = 'ngxTrimDirective';
const valueAllSpaces = '      ';
const valueWithLeadingSpaces = '    ngxTrimDirective';
const valueWithTrailingSpaces = 'ngxTrimDirective   ';
const valueWithSpaces = '    ngxTrimDirective     ';

describe('Trim Sample', () => {
  let page: TrimPage;

  beforeEach(() => {
    page = new TrimPage();
  });

  it('should trim value of field A on blur', async () => {
    page.navigateTo();

    const fieldA = page.getFieldA();
    const fieldB = page.getFieldB();
    const submitButton = page.getSubmitButton();

    fieldA.sendKeys(valueAllSpaces);
    expect(submitButton.isEnabled()).toBeTruthy();
    fieldB.click();
    expect(submitButton.isEnabled()).toBeFalsy();

    fieldA.sendKeys(valueWithLeadingSpaces);
    expect(page.getFieldAValue()).toEqual(valueWithLeadingSpaces);
    fieldB.click();
    expect(page.getFieldAValue()).toEqual(value);

    await fieldA.clear();
    fieldA.sendKeys(valueWithTrailingSpaces);
    expect(page.getFieldAValue()).toEqual(valueWithTrailingSpaces);
    fieldB.click();
    expect(page.getFieldAValue()).toEqual(value);

    await fieldA.clear();
    fieldA.sendKeys(valueWithSpaces);
    expect(page.getFieldAValue()).toEqual(valueWithSpaces);
    fieldB.click();
    expect(page.getFieldAValue()).toEqual(value);
  });

  it('should trim value of field B', () => {
    page.navigateTo();

    const fieldB = page.getFieldB();

    fieldB.sendKeys(value);

    fieldB.sendKeys(' ');
    expect(page.getFieldBValue()).toEqual(value);

    fieldB.sendKeys(protractor.Key.HOME, ' ');
    expect(page.getFieldBValue()).toEqual(value);

    fieldB.sendKeys(valueWithTrailingSpaces);
    expect(page.getFieldBValue()).toEqual(`${valueWithTrailingSpaces}${value}`);
  });
});
