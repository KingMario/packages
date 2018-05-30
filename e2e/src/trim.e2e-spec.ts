import { TrimPage } from './trim.po';
import {
  browser,
  protractor,
} from 'protractor';

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

    const field = page.getFieldA();
    const submitButton = page.getSubmitButton();

    field.sendKeys(valueAllSpaces);
    expect(submitButton.isEnabled()).toBeTruthy();
    field.sendKeys(protractor.Key.TAB);
    expect(submitButton.isEnabled()).toBeFalsy();

    field.sendKeys(valueWithLeadingSpaces);
    expect(page.getFieldAValue()).toEqual(`"${valueWithLeadingSpaces}"`);
    field.sendKeys(protractor.Key.TAB);
    expect(page.getFieldAValue()).toEqual(`"${value}"`);

    await field.clear();
    field.sendKeys(valueWithTrailingSpaces);
    expect(page.getFieldAValue()).toEqual(`"${valueWithTrailingSpaces}"`);
    field.sendKeys(protractor.Key.TAB);
    expect(page.getFieldAValue()).toEqual(`"${value}"`);

    await field.clear();
    field.sendKeys(valueWithSpaces);
    expect(page.getFieldAValue()).toEqual(`"${valueWithSpaces}"`);
    field.sendKeys(protractor.Key.TAB);
    expect(page.getFieldAValue()).toEqual(`"${value}"`);
  });

  it('should trim value of field B', async () => {
    page.navigateTo();

    const field = page.getFieldB();

    field.sendKeys(value);

    field.sendKeys(' ');
    expect(page.getFieldBValue()).toEqual(`"${value}"`);

    field.sendKeys(protractor.Key.HOME);
    field.sendKeys(' ');
    expect(page.getFieldBValue()).toEqual(`"${value}"`);

    field.sendKeys(valueWithTrailingSpaces);
    expect(page.getFieldBValue()).toEqual(`"${valueWithTrailingSpaces}${value}"`);
  });
});
