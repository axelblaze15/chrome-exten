  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
  
  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'var ele=document.getElementsByClassName("_2t-a _50tj");for (key of ele){key.style.background = "' + color + '"};'});
      //{code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };