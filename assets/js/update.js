var imageURL, os, browser, webURL;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
     
      console.log(request);
            
      imageURL = request.imageURL;
      os = request.os;
      browser = request.browser;
      webURL = request.webURL;     
      
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
      
       setTimeout(function(){sendTheInfo()},2500);
  });


function sendTheInfo(){
    
    var environment = '';
    
    if (webURL.search('staging') > -1 ){
        environment = 'Staging';
    }

    if (webURL.search('development') > -1 ){
            environment = 'Development';
    }
               
    if (webURL.search('www.1800contacts.com') > -1 ){
            environment = 'Production';
    }
    
    //select the environment
    $('#witc_132_txt').val(environment);
            
    //set the content in the iframe
    var dataToCopy = 'Browser: ' + browser +
                   '<br>Found in URL: ' + webURL +
                   '<br>OS: ' + os;
    
    $('#163').contents().find('iframe').contents().find('body').append(dataToCopy);
    
    //set content and focus
    var titleText =  $('#witc_125_txt');
    titleText.val('BRB | ');
    titleText.focus();
    
      
};
    
