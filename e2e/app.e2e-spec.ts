import { WineWorldPage } from './app.po';

describe('wine-world App', function() {
  let page: WineWorldPage;

  beforeEach(() => {
    page = new WineWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
