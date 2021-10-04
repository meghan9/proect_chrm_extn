var menuItem = {
    "id": "Instant_Share",
    "title": "Instant_Share",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Instant_Share" && clickData.selectionText){    
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 10,
            "left": 10,
            "width": screen.availWidth,
            "height": screen.availHeight
        };              
        chrome.windows.create(createData, function(){});        
    }
});



