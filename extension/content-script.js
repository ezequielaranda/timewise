//start connection in content script
let contentPort = chrome.runtime.connect({
  name: 'background-content'
})

//Listen for runtime message
chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
  //Retrieve offset dimension
  if (message.action === 'GET_DIMENSION') {
    // contentPort.postMessage({
    //   type: 'DIMENSION', 
    //   payload: {
    //     height: document.body.offsetHeight,
    //     width: document.body.offsetWidth       
    //   }
    // })
    toggle()
  }
})

function toggle(){
  iframe.style.display = (iframe.style.display === "none") ? "block" : "none";
}

var iframe = document.createElement('iframe')
iframe.height = "110px";
iframe.width = "110px";
iframe.style.display = "none";
iframe.style.background = "transparent";
iframe.style.position = "fixed";
iframe.style.bottom = "100px";
iframe.style.right = "100px";
iframe.style.zIndex = "99999";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("tw-button.html")

document.body.appendChild(iframe);