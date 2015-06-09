console.log('meteor-detector background script started!');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.meteor) {
      chrome.pageAction.show(sender.tab.id);
    }
  });
