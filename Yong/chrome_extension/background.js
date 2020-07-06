 
//chrome.browserAction.setBadgeText({text: 'OFF'});
//chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
var itemNo = 0;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("background listening");
	console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
	
    if (request.item != null) {
    	console.log("background item detected");
    	
    	sendResponse({ result: "itme add successed" });

    } 
});
