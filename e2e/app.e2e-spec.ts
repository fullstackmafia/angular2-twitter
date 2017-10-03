import { TwitterAppPage } from './app.po';

describe('twitter-app App', () => {
  let page: TwitterAppPage;

  beforeEach(() => {
    page = new TwitterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
