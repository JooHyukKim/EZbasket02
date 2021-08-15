console.log("컨텐트 스크립트 시작");

chrome.storage.sync.get(["productList"], function(items) {
	
	var productList=new Array();
	
	if(items.productList==null){
		console.log("No Items in List");
	}
	
	else{
		productList=items.productList;
		console.log("Item exists")
		console.log(productList)
	}
	
	if(document.querySelector("span[class=product_title]")!=null){//아이템 존재시

		console.log("상품이 존재함");
		var name = document.querySelector("span[class=product_title]").innerText;
		console.log(name);
		var price = document.querySelector("span[id=goods_price]").innerText;
		console.log(price);
		var category = document.querySelector("p[class=item_categories]").innerText;
		console.log(category);
		var imageSrc = document.querySelector("img#bigimg").src;
		console.log(imageSrc);
		console.log(document.URL)
		
		var item ={
				"shop":"musinsa",
				"name":name,
				"price":price,
				"category":category,
				"imgSrc":imageSrc,
				"url": document.URL
		}
		
		productList.push(item);
		console.log(productList[0]);

		chrome.storage.sync.set({"productList":productList}, function() {
	        console.log('Value is set to ' + name);
	      });
		
	}else {
		console.log("item not found");
	}
	
});


