
function reqCurrentTab(callback) {
	alert("wh");
	chrome.tabs.query({
		'active' : true,
		'windowId' : chrome.windows.WINDOW_ID_CURRENT
	}, function(tabs) {
		alert("1");
		var url = tabs[0].url;
		alert("2");
		callback(url);
	});
} //function getCurrentTabUrl(callback) {
function resCurrentUrl(url){
	var parser = parseFor(url);
	alert("RESPONSE resCurrentUrl :::"+url);
}

document.addEventListener("DOMContentLoaded",function(){
	var addProduct = document.getElementById("addProduct");
	var showCart = document.getElementById("showCart");

	showCart.addEventListener("click", function () {
		alert("yes (z)");
	}); //showCart.addEventListener("click", function () {
		// chrome.tabs.executeScript(null,{
		// 	code:
		// },receiveText);
		
	addProduct.addEventListener("click",function(){
		alert("ys");
		reqCurrentTab(resCurrentUrl);
	}); // addProduct.addEventListen
/*
function productInputStream() {
	var productList = JSON.parse(window.localStorage.getItem('productList')) || [];
	var newProduct = {
		'product-name': itemContainer.find('h2.product-name a').text(),
		'product-image': itemContainer.find('div.product-image img').attr('src'),
		'product-price': itemContainer.find('span.product-price').text()
	};
	productList.push(newProduct);
	window.localStorage.setItem('productList', JSON.stringify(productList));
}
*/


function parseFor(inputURL) {
	this.url = inputURL;
	url = "http:..sdfkhoweaimusina.com";
	var parser;
	if (url.toLowerCase().includes("musinsa")) {
		parser = {
			shop :"Musinsa",
			name :'document.getElementsByClassName("product_title")[0].getElementsByTagName("span")[0].innerHTML',
			price :'document.querySelector("span.product_article_price#sale_price").innerHTML',
			imgSrc :'document.querySelector("img#big_img").src',
			category :'document.querySelector("p.item_categories").innerHTML'
		}
	}else if (url.toLowerCase().includes("auction")){
		parser = {
			shop :"Auction",
			name :'document.getElementsByClassName("product_title")[0].getElementsByTagName("span")[0].innerHTML',
			price :'document.querySelector("span.product_article_price#sale_price").innerHTML',
			imgSrc :'document.querySelector("img#big_img").src',
			category :'document.querySelector("p.item_categories").innerHTML'
		}
	}else{
		alert("NoneParserType");
	}
	alert("creating Parsing codes" +parser.shop +"/"+ parser.name+"/"+parser.price+"/"+parser.imgSrc+"/"+parser.category);
	return parser
} //function parseFor(url) {
	

}); // END === document.addEventListener("DOMContentLoaded"
