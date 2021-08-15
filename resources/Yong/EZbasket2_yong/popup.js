document.getElementById("bucket").addEventListener("click", goBucket);

function goBucket() {
	location.href = "cart.html";
}


function getCurrentTabUrl(callback) {
	chrome.tabs.query({
		'active' : true,
		'windowId' : chrome.windows.WINDOW_ID_CURRENT
	}, function(tabs) {
		var url = tabs[0].url;
		callback(url);
	});
}

function mapParser(url){
	if(url.toLowerCase().includes("musinsa")){
		chrome.tabs.executeScript({ file:"musinsa.js", allFrames: false });
		console.log("executed Musinsa Parser")
	}
}

document.addEventListener("DOMContentLoaded",function(){
	var addCart=document.getElementById("addcart");
	
	addCart.addEventListener('click',function(){
		getCurrentTabUrl(function(url){
			mapParser(url);
		});
	});
});

function getItem(){
	
}


/*		
	//크롬 스토리지에 저장된 값을 가져오세요. 
	chrome.storage.sync.get(function (data) {
	  // #user의 값으로 data의 값을 입력해주세요. 
	  document.querySelector('#user').value = data.userWords;

	  //분석해서 그 결과를 #result에 넣어주세요. 
	  matching(data.userWords);

	});
*/