import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphTitle() {
    return element(by.css('phx-app h1')).getText();
  }

  getParagraphText() {
    return element(by.css('phx-app p')).getText();
  }
}
