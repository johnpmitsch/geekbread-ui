import { GeekbreadUiPage } from './app.po';

describe('geekbread-ui App', function() {
  let page: GeekbreadUiPage;

  beforeEach(() => {
    page = new GeekbreadUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
