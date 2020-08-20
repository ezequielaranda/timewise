//background script is always running unless extension
//is disabled

//Wait for some one connect to it
let contentPort
chrome.runtime.onConnect.addListener(function(portFrom) {
   if(portFrom.name === 'background-content') {
      //This is how you add listener to a port.
      portFrom.onMessage.addListener(function(message) {
         //Do something to this message(offsetheight and width)
      });
   }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  //if(activeInfo.tabId === '')
  chrome.browserAction.setBadgeBackgroundColor({ color: '#2b3a4b' });
  chrome.browserAction.setBadgeText({text: ''})
})