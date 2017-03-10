import { Sp17P3G7Page } from './app.po';

describe('sp17-p3-g7 App', () => {
  let page: Sp17P3G7Page;

  beforeEach(() => {
    page = new Sp17P3G7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
