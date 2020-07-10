<<<<<<< HEAD
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	var product = request.product;
	alert("zuper!");
	productInputStream(product);
	sendResponse({received: "what successful from background.js"});
});

function productInputStream(product) {
	alert("productInputStream ::: "+product.name);
	console.log("productInputStream ::: "+product.name);
	var productList = JSON.parse(window.localStorage.getItem('productList')) || [];
    productList.push(product);
    alert("list length"+productList.length);
    productList.forEach(product => {
        console.log("adding Parsing products ::: " +product.shop +"@@@"+ product.name+"@@@"+product.price+"@@@"
        +product.imgSrc+"@@@"+product.category+"@@@"+product.url);
    });
	window.localStorage.setItem('productList', JSON.stringify(productList));
}
=======
 
//chrome.browserAction.setBadgeText({text: 'OFF'});
//chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("background listening");
	console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
	
    if (request.data == "logined") {
    	console.log("background logined detect");
    	chrome.browserAction.setBadgeText({text: 'ON'});
    	chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    	console.log("logincolor blue");
    	
    	sendResponse({ result: "login successed" });

    } else if (request.data == "logout") {
    	chrome.browserAction.setBadgeText({text: 'OFF'});
    	chrome.browserAction.setBadgeBackgroundColor({color: '#EA1515'});
    	console.log("logincolor blue")
    	sendResponse({ result: "logout successed" });
    }  
});
>>>>>>> parent of ac360af... word
