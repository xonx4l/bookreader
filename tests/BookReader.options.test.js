import '../src/js/jquery-wrapper.js';
import '../src/js/jquery-ui-wrapper.js';
import '../BookReader/jquery.browser.min.js';
import '../BookReader/dragscrollable-br.js';
import 'jquery-colorbox';

import BookReader from '../src/js/BookReader.js';

beforeAll(() => {
  document.body.innerHTML = '<div id="BookReader">';
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('BookReader options', () => {
  it('initializes BookReder to fullscreen when `startFullscreen` true', () => {
    const br = new BookReader({
      startFullscreen: true
    });
    br.init();

    expect(document.getElementById('BookReader').classList.contains('br-ui-full')).toBe(true);
  });
});
