import { HomePage } from './app.po';

describe('Phenomenex Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphTitle()).toEqual(<any>'This is an example header');
  });

  it('p tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(<any>'This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.');
  }); 

});
