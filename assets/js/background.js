var environmentData;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
     environmentData = request;  
      openTFS();
  });

function openTFS() {
           
        var tabId = '';
    
        chrome.downloads.download({"url":environmentData.imageURL}, function (){});
    
        chrome.tabs.create({url : environmentData.tfsUrl}, function(tab) { 
            tabId = tab.id;
        });
            
            setTimeout(function(){
            
            chrome.tabs.query({active: true, currentWindow: true}, function() {
                chrome.tabs.sendMessage(tabId, environmentData, function(response) {
                        console.log(response.farewell);
                    });
            });
            
        },2000);
        
}