function createProduct() {
    var cats = document.querySelector("div.loc").querySelectorAll("a.dropdown");
    var categor = "";
    cats.forEach(cat => {
        categor += cat.innerHTML;
    });
    var product = {
        shop :"Auction",
        name : document.getElementsByClassName("text__item-title")[0].innerHTML,
        price :document.querySelector("strong.price_real").innerHTML,
        imgSrc :document.querySelector("ul.viewer").getElementsByTagName("img")[0].src,
        category :categor,
        url : document.URL
    };
    return product;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function run() {
    alert("yessss auction");
    var product = createProduct();
    console.log("creating Parsing products ::: " +product.shop +"\n@@@"+ product.name+"\n@@@"+product.price+"\n@@@"
    +product.imgSrc+"\n@@@"+product.category+"\n@@@"+product.url);
    alert("Parser sending Message with product, START with "+product.categor);
    chrome.runtime.sendMessage({product: product}, function(response) {
        console.log(response.received);
    });
    alert("Parser sending Message with product, FINISHED");    
}//run
run();