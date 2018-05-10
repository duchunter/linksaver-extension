'use strict'

chrome.browserAction.onClicked.addListener(tab => {
  chrome.contextMenus.create({
    title: "Test %s menu item",
    contexts:["selection"],
    onclick: function(info, tab) {
        sendSearch(info.selectionText);
    }
  });

  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let activeTab = tabs[0];
    alert(JSON.stringify(activeTab));
    chrome.tabs.sendMessage(activeTab.id, {message: "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle request.message
});
