'use strict'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if( request.message === "clicked_browser_action" ) {
    chrome.runtime.sendMessage({
      message: "test",
      html: document
    });
  }
});
