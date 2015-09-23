var environmentData;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
           
      environmentData = request;    
      
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
      
       setTimeout(function(){sendTheInfo()},2500);
  });


function sendTheInfo(){
    
    //select the environment
    $('#witc_132_txt').val(environmentData.environment);
            
    //set the content in the iframe
    var dataToCopy = 'Browser: ' + environmentData.browser +
                   '<br>Found in URL: ' + environmentData.webURL +
                   '<br>OS: ' + environmentData.os;
    
    $('#163').contents().find('iframe').contents().find('body').append(dataToCopy);
    
    //set content and focus
    var titleText =  $('#witc_125_txt');
    titleText.val(environmentData.bugPrefix);
    titleText.focus();
    
      
};
    
