import { NotesCalculatorPage } from './app.po';

describe('notes-calculator App', () => {
  let page: NotesCalculatorPage;

  beforeEach(() => {
    page = new NotesCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
