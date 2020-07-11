window.addEventListener('DOMContentLoaded', (event) => {
	console.log("hi")
	var productList =new Array();
	chrome.storage.sync.get(["productList"], function(items) {
		if(items==null){
			console.log("No Items in cart");
		}
		else{
			var cart = document.getElementsByClassName("list-group")[0];
			items.productList.forEach(product => {
				cart.innerHTML+='<ul class="list-group-item"><li id="productImg"><a href="'+product.url+'"><img src="'+product.imgSrc+'" width="180px" height="180px"></a></li><li id="name">'+product.name+'</li><li id="price">'+product.price+'</li><li id="category">'+product.category+'</li><li id="delete"><img id="DeleteProduct" src="img/delete.png" width="20%" height="20%"></li></ul>';
				});
		}
	});
});

