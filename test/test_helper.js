import jsdom from 'jsdom';


// Simulate browser environment by mocking document and window 
// properties.
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;


// Here we need to take all the keys of window and provide it 
// to global object. This simulates browser environment because 
// in browser you don't need window prefix in order to reach its 
// properties and methods.
Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});