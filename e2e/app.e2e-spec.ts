import { FormCmsPage } from './app.po';

describe('form-cms App', function() {
  let page: FormCmsPage;

  beforeEach(() => {
    page = new FormCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
