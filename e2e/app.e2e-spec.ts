import { RestConsumerPage } from './app.po';

describe('rest-consumer App', function() {
  let page: RestConsumerPage;

  beforeEach(() => {
    page = new RestConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
