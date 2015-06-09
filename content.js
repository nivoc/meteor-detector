if (document.querySelector('link.__meteor-css__') !== null) {
  chrome.runtime.sendMessage({meteor: true});
}
