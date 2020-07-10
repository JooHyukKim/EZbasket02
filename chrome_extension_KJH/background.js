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