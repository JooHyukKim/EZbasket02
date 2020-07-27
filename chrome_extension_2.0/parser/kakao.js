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
  
  var bgImg  = "";
  bgImg = document.querySelector("div.item_swipe img");
  if (bgImg==null || bgImg=="") {
    bgImg +=document.querySelector("div.thumb_photo").style.backgroundImage;
    bgImg = bgImg.substring(9,bgImg.length-2);
  }else{
    bgImg= bgImg.src;
  }
  alert(bgImg);
  var product = {
    shop: "Kakao",
    name: document.querySelector("strong.tit_detail").textContent.trim(),
    price: document.querySelectorAll("span.num_price")[0].textContent+" | "+document.querySelectorAll("span.num_price")[1].textContent,
    imgSrc: bgImg,
    category: "Unknown Category",
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
