const s = document.createElement('script');
s.src = chrome.runtime.getURL('grammarly.js');
document.documentElement.prepend(s);
s.onload = function () {
  s.parentNode.removeChild(s);
};
