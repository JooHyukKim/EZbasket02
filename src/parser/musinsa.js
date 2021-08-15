console.log("컨텐트 스크립트 시작");
chrome.storage.sync.get(["productList"], function (items) {
  var productList = new Array();
  if (items.productList == null) {
    console.log("No Items in List");
  } else {
    productList = items.productList;
    console.log("Item exists");
    console.log(productList);
  }

  if (document.querySelector("span[class=product_title]") != null) {
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
  var product = {
    shop: "Musinsa",
    name: document.getElementsByClassName("product_title")[0].innerText,
    price: document.querySelector("span#list_price").innerText,
    imgSrc: document
      .querySelector("div.product-img")
      .getElementsByTagName("img")[0].src,
    category: document
      .querySelector("p.item_categories")
      .getElementsByTagName("a")[0].innerText,
    url: document.URL,
  };
  return product;
}
/* 
function createProduct() {
  var product = {
    shop: "Musinsa",
    name: document.getElementsByClassName("product_title")[0].innerText,
    price: document.querySelector("span#list_price").innerText,
    imgSrc: document
      .querySelector("div.product-img")
      .getElementsByTagName("img")[0].src,
    category: document
      .querySelector("p.item_categories")
      .getElementsByTagName("a")[0].innerText,
    url: document.URL,
  };
  return product;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function run() {
  var product = createProduct();
  console.log(
    "creating Parsing products ::: " +
      product.shop +
      "@@@" +
      product.name +
      "@@@" +
      product.price +
      "@@@" +
      product.imgSrc +
      "@@@" +
      product.category +
      "@@@" +
      product.url
  );
  chrome.runtime.sendMessage({ product: product }, function (response) {
    console.log(response.received);
  });
} //run
run();

*/
