chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.message === 'showMarkerTool'){
      chrome.tabs.executeScript({
        file: 'contentScript.js'
      })
    }
  })