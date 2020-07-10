<<<<<<< HEAD
function reqCurrentTab(callback) {
=======
/*getCurrentTab 시작*/ 
function getCurrentTabUrl(callback) {
>>>>>>> parent of ac360af... word
	chrome.tabs.query({
		'active' : true,
		'windowId' : chrome.windows.WINDOW_ID_CURRENT
	}, function(tabs) {
		var url = tabs[0].url;
		callback(url);
	});
<<<<<<< HEAD
} //function getCurrentTabUrl(callback) {

function addProductMapping(inputURL) {
	console.log("addProductMapping");
	if (inputURL.toLowerCase().includes("musinsa")) {
		chrome.tabs.executeScript(null,{file:'parser/musinsa.js'});
  }else if(inputURL.toLowerCase().includes("auction")){
    chrome.tabs.executeScript(null,{file:'parser/auction.js'});
  }else{
    alert("장바구니 추가 에러");
  }
}

document.addEventListener("DOMContentLoaded",function(){
	var addProductBtn = document.getElementById("addProduct");
	addProductBtn.addEventListener("click",function(){
		reqCurrentTab(addProductMapping);
	}); // addProduct.addEventListen
}); // END === document.addEventListener("DOMContentLoaded"
=======
}

function renderURL(statusText){
	document.write("<h2>"+statusText+"</h2>");
}
/*getCurrentTab 끝*/

// chrome.tabs.create({url: chrome.extension.getURL('background.html')});

/*addProduct 시작*/
var addProduct =document.getElementById("addProduct");
addProduct.addEventListener('click',function(){
	getCurrentTabUrl(function(url){
		renderURL(url);
	});
	// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
	// 	document.write(`<h3>The tabs you're on are:</h3>`);
	// 	for (let i = 0; i < tabs.length; i++) {
	// 		console.log(tabs[i]);
	// 	}
	// });
    // window.localStorage.setItem("name","Kim,Joo Hyuk");
});
/*addProduct 끝*/

/*getCurrentTab 시작*/
/*getCurrentTab 끝*/



console.log("");
>>>>>>> parent of ac360af... word
