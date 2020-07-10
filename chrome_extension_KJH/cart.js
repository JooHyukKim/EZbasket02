window.addEventListener('DOMContentLoaded', (event) => {
    var productList = JSON.parse(window.localStorage.getItem('productList')) || [];
    var cart = document.getElementsByClassName("list-group")[0];
    productList.forEach(product => {
        cart.innerHTML+='<ul class="list-group-item"><li id="productImg"><a href="'+product.url+'"><img src="'+product.imgSrc+'" width="180px" height="180px"></a></li><li id="name">'+product.name+'</li><li id="price">'+product.price+'</li><li id="category">'+product.category+'</li><li id="delete"><img id="DeleteProduct" src="img/delete.png" width="20%" height="20%"></li></ul>';
    });
});

