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
      
       setTimeout(function(){sendTheInfo()},1500);
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
    
    //copy to clipboard the data
    copyToClipboard('Browser: ' + browser +
                   '\n. Found in URL: ' + webURL + '\n' +
                   '\n. OS: ' + os);
    alert('Info\n\nEnvironment data copied to clipboard!!');
    
    $('#163').contents().find('body').val(environment);
        
};

function copyToClipboard( text ){
                var copyDiv = document.createElement('div');
                copyDiv.contentEditable = true;
                document.body.appendChild(copyDiv);
                copyDiv.innerHTML = text;
                copyDiv.unselectable = "off";
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
                document.body.removeChild(copyDiv);
};

    
