window.addEventListener("DOMContentLoaded", (event) => {
  var productList = new Array();
  chrome.storage.sync.get(["productList"], function (items) {
    if (items == null) {
      console.log("No Items in cart");
    } else {
      var cart = document.getElementsByClassName("list-group")[0];
      idCount = 0;
      items.productList.forEach((product) => {
        try {
          cart.innerHTML +=
          '<ul class="list-group-item"><li id="productImg"><a href=' +
          product.url +
          ' target="_blank"><img src="' +
          product.imgSrc +
          '" width="100px" height="100px" value=' +
          product.url +
          '></a></li><li id="name">' +
          product.name +
          '</li><li id="price">' +
          product.price +
          '</li><li id="category">' +
          product.category +
          '</li><li id="delete"><img class="DeleteProduct" src="img/delete.png" width="50%" height="50%" alt='+idCount+'></li></ul>';
          idCount+=1;
        } catch (error) {
          alert(product.url);
        }
      });
    }
  });
  document.body.addEventListener("click", function(event) {
    if (event.target.matches("img.DeleteProduct")) {
      var targetIndex = event.target.alt;      
      chrome.storage.sync.get(["productList"], function (items) {
        if (items == null) {
          console.log("No Items in cart");
        } else {
          var plist = items.productList;
          var newplist = new Array();
          for (let index = 0; index < plist.length; index++) {
            if (index==targetIndex) {
              continue;
            } else {
              newplist.push(plist[index]);
            }
          }
          chrome.storage.sync.set({ productList: newplist }, function () {
            console.log("ProductList Set.");
          });
          window.location.href="cart.html";
        }
      });
    }else if(event.target.matches("button#addcart")){
      reqCurrentTab(addProductMapping);
    }

  });
  
});

function reqCurrentTab(callback) {
  chrome.tabs.query(
    {
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT,
    },
    function (tabs) {
      var url = tabs[0].url;
      callback(url);
      window.location.href="cart.html";
    }
  );
} //function getCurrentTabUrl(callback) {

  function addProductMapping(inputURL) {

    try {
    if (inputURL.toLowerCase().includes("musinsa")) {
      chrome.tabs.executeScript(null, { file: "parser/musinsa.js" });
      window.location.href="cart.html";
    } else if (inputURL.toLowerCase().includes("auction")) {
      chrome.tabs.executeScript(null, { file: "parser/auction.js" });
    }else if (inputURL.toLowerCase().includes("gmarket")) {
      chrome.tabs.executeScript(null, { file: "parser/gmarket.js" });
    }else if (inputURL.toLowerCase().includes("11st")) {
      chrome.tabs.executeScript(null, { file: "parser/elevenst.js" });
    }else if (inputURL.toLowerCase().includes("interpark")) {
      chrome.tabs.executeScript(null, { file: "parser/interpark.js" });
    }else if (inputURL.toLowerCase().includes("coupang")) {
      chrome.tabs.executeScript(null, { file: "parser/coupang.js" });
    }else if (inputURL.toLowerCase().includes("g9.co.kr")) {
      chrome.tabs.executeScript(null, { file: "parser/g9.js" });
    }else if (inputURL.toLowerCase().includes("store.kakao")) {
      chrome.tabs.executeScript(null, { file: "parser/kakao.js" });
    }else if (inputURL.toLowerCase().includes("wemakeprice.com")) {
      chrome.tabs.executeScript(null, { file: "parser/wemakeprice.js" });
    }else if (inputURL.toLowerCase().includes("ssg.com")) {
      chrome.tabs.executeScript(null, { file: "parser/ssg.js" });
    }else if (inputURL.toLowerCase().includes("tmon.co.kr")) {
      chrome.tabs.executeScript(null, { file: "parser/tmon.js" });
    }else if (inputURL.toLowerCase().includes("lotteon")) {
      chrome.tabs.executeScript(null, { file: "parser/lotteon.js" });
    }else if (inputURL.toLowerCase().includes("lotteimall")) {
      chrome.tabs.executeScript(null, { file: "parser/lotteimall.js" });
    }else if (inputURL.toLowerCase().includes("gsshop")) {
      chrome.tabs.executeScript(null, { file: "parser/gsshop.js" });
    }else if (inputURL.toLowerCase().includes("CJMALL")) {
      chrome.tabs.executeScript(null, { file: "parser/cjmall.js" });
    }else if (inputURL.toLowerCase().includes("hnsmall")) {
      chrome.tabs.executeScript(null, { file: "parser/hnsmall.js" });
    }else if (inputURL.toLowerCase().includes("emart")) {
      chrome.tabs.executeScript(null, { file: "parser/emart.js" });
    }else if (inputURL.toLowerCase().includes("hyundaihmall")) {
      chrome.tabs.executeScript(null, { file: "parser/hyundaihmall.js" });
    }else if (inputURL.toLowerCase().includes("smartstore")) {
      chrome.tabs.executeScript(null, { file: "parser/smartstore.js" });
    }else if (inputURL.toLowerCase().includes("wizwid")) {
      chrome.tabs.executeScript(null, { file: "parser/wizwid.js" });
    }else if (inputURL.toLowerCase().includes("halfclub")) {
      chrome.tabs.executeScript(null, { file: "parser/halfclub.js" });
    }else if (inputURL.toLowerCase().includes("wconcept")) {
      chrome.tabs.executeScript(null, { file: "parser/wconcept.js" });
    }else if (inputURL.toLowerCase().includes("codibook")) {
      chrome.tabs.executeScript(null, { file: "parser/codibook.js" });
    }else if (inputURL.toLowerCase().includes("lookpin")) {
      chrome.tabs.executeScript(null, { file: "parser/lookpin.js" });
    }else {
      alert("InvalidProudctPage Error");
    }
    } catch (error) {
      alert("error while mapping");
    }finally{
      window.location.href="cart.html";
    }
  
    
    
  }