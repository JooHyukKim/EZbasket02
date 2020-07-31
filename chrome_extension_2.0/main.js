document.addEventListener("DOMContentLoaded", function () {
  var addProductBtn = document.getElementById("addProduct");
  addProductBtn.addEventListener("click", function () {
    reqCurrentTab(addProductMapping);
  }); // addProduct.addEventListen
}); // END === document.addEventListener("DOMContentLoaded"

function reqCurrentTab(callback) {
  chrome.tabs.query(
    {
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT,
    },
    function (tabs) {
      var url = tabs[0].url;
      callback(url);
    }
  );
} //function getCurrentTabUrl(callback) {

function addProductMapping(inputURL) {

  try {
    console.log("addProductMapping");
         if (inputURL.toLowerCase().includes("musinsa")) {
    chrome.tabs.executeScript(null, { file: "parser/musinsa.js" });
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
  }else if (inputURL.toLowerCase().includes("brandi")) {
    chrome.tabs.executeScript(null, { file: "parser/brandi.js" });
  }else if (inputURL.toLowerCase().includes("akmall")) {
    chrome.tabs.executeScript(null, { file: "parser/akmall.js" });
  }else if (inputURL.toLowerCase().includes("cjmall")) {
    chrome.tabs.executeScript(null, { file: "parser/cjmall.js" });
  }else {
	  chrome.tabs.executeScript(null, { file: "parser/fail.js" });
  }
  } catch (error) {
    alert("error while mapping");
  }
}

