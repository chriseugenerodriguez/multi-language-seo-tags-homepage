import { DPage } from './app.po';

describe('d App', () => {
  let page: DPage;

  beforeEach(() => {
    page = new DPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
