function createProduct() {
    var product = {
        shop :"Musinsa",
        name :document.getElementsByClassName("product_title")[0].innerText,
        price :document.querySelector("span#list_price").innerText,
        imgSrc :document.querySelector("div.product-img").getElementsByTagName("img")[0].src,
        category :document.querySelector("p.item_categories").getElementsByTagName("a")[0].innerText,
        url : document.URL
    };
    return product;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function run() {
    var product = createProduct();
    console.log("creating Parsing products ::: " +product.shop +"@@@"+ product.name+"@@@"+product.price+"@@@"
    +product.imgSrc+"@@@"+product.category+"@@@"+product.url);
    chrome.runtime.sendMessage({product: product}, function(response) {
        console.log(response.received);
    });
}//run
run();