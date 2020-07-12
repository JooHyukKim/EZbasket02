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
  console.log("addProductMapping");
  if (inputURL.toLowerCase().includes("musinsa")) {
    chrome.tabs.executeScript(null, { file: "parser/musinsa.js" });
  } else if (inputURL.toLowerCase().includes("auction")) {
    chrome.tabs.executeScript(null, { file: "parser/auction.js" });
  } else {
    alert("InvalidProudctPage Error");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var addProductBtn = document.getElementById("addProduct");
  addProductBtn.addEventListener("click", function () {
    reqCurrentTab(addProductMapping);
  }); // addProduct.addEventListen
}); // END === document.addEventListener("DOMContentLoaded"
