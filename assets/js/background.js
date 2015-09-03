var imageURL, os, browser, webURL;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
     imageURL = request.imageURL;
      os = request.os;
      browser = request.browser;
      webURL = request.webURL;
      
      openTFS();
  });

function openTFS() {
           
        var tfsUrl = 'https://tfs/tfs/DefaultCollection/Ecommerce/_workitems#witd=Bug&id=1&_a=new';    
    
        var tabId = '';
    
        chrome.downloads.download({"url":imageURL}, function (){});
    
        chrome.tabs.create({url : tfsUrl}, function(tab) { 
            tabId = tab.id;
            //chrome.tabs.executeScript(tabId, {file: '/assets/js/update.js'})
        });
            
            setTimeout(function(){
            
            chrome.tabs.query({active: true, currentWindow: true}, function() {
                chrome.tabs.sendMessage(tabId, {'os': os, 'browser' : browser, 'imageURL' : imageURL, 'webURL': webURL}, function(response) {
                        console.log(response.farewell);
                    });
            });
            
        },2000);
        
}