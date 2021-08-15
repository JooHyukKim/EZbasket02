console.log("컨텐트 스크립트 시작");

if(document.querySelector("span[class=product_title]")!=null){//로그인되어있다면
	console.log("상품이 존재함");
	var name = document.querySelector("span[class=product_title]").innerText;
	console.log(name);
	var price = document.querySelector("span[id=goods_price]").innerText;
	console.log(price);
	var category = document.querySelector("p[class=item_categories]").innerText;
	console.log(category);
	var image = document.querySelector("img#bigimg");
	console.log(image);
	chrome.storage.local.set({name: price+"&"+category+"&"+image}, function() {
        console.log('Value is set to ' + name);
      });
	chrome.runtime.sendMessage({item: name+"&"+price+"&"+category+"&"+image}, function(response) {
	console.log(response);
	});
	console.log("메세지 전달 완료");
	
}else {
	console.log("item not found");
}

if(document.getElementById("errorMessage")!=null){//로그인되어있다면
	console.log("에러 발생!!!")
	console.log("메세지 시작!");
	chrome.runtime.sendMessage({error: document.getElementById("errorMessage").innerText}, function(response) {
	    console.log(response);
	});
	console.log("메세지 전달 완료");
	
}