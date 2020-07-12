chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var product = request.product;
  productInputStream(product);
  sendResponse({ received: "Successful from background.js" });
});

function productInputStream(product) {
  console.log("productInputStream ::: " + product.name);
  var productList =
    JSON.parse(window.localStorage.getItem("productList")) || [];
  productList.push(product);
  console.log("list length" + productList.length);
  productList.forEach((product) => {
    console.log(
      "adding Parsing products ::: " +
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
  });
  window.localStorage.setItem("productList", JSON.stringify(productList));
}
