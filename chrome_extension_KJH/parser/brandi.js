console.log("컨텐트 스크립트 시작");

chrome.storage.sync.get(["productList"], function (items) {
  alert("hi brandi ");
  var productList = new Array();
  if (items.productList == null) {
    console.log("No Items in List");
  } else {
    productList = items.productList;
    console.log("Item exists");
    console.log(productList);
  }
  if (document.querySelector("title") != null) {
    var item = createProduct();
    productList.push(item);
    console.log(productList[0]);
    chrome.storage.sync.set({ productList: productList }, function () {
      console.log("ProductList Set.");
    });
  } else {
    console.log("item not found");
  }
});

function createProduct() {
/*  var cats = document.querySelector("ul.location").querySelectorAll("button");
  var categor = "";
  cats.forEach((cat) => {
    categor += cat.innerHTML;
  });*/
  var price1=document.querySelector("div.detail_price");
  price1.querySelector("b").remove();
  price1.querySelector("span").remove();
  
  var product = {
    shop: "Brandi",
    name: document.querySelector("div.detail_title").innerHTML,
    price: price1.innerHTML,
    imgSrc: document.querySelector("li.lslide.active").getElementsByTagName("img")[0]
      .src,
    category: null,
    url: document.URL,
  };
  return product;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

function run() {
  alert("yessss auction");
  var product = createProduct();
  console.log(
    "creating Parsing products ::: " +
      product.shop +
      "\n@@@" +
      product.name +
      "\n@@@" +
      product.price +
      "\n@@@" +
      product.imgSrc +
      "\n@@@" +
      product.category +
      "\n@@@" +
      product.url
  );
  alert("Parser sending Message with product, START with " + product.categor);
  chrome.runtime.sendMessage({ product: product }, function (response) {
    console.log(response.received);
  });
  alert("Parser sending Message with product, FINISHED");
} //run
run();
*/
