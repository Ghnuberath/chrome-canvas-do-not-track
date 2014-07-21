//with help from https://stackoverflow.com/questions/14165629/add-javascript-file-to-all-sites-i-browse
var script = document.createElement('script'); // Create a Script Tag
script.src = chrome.extension.getURL('canvas-disable-fingerprint-methods.js'); //Fetch the content script
script.onload = function () {
    this.parentNode.removeChild(this); //Remove script after script executed
};
(document.head || document.documentElement).appendChild(script); //ADD script tag 
                                                                 //to head or Html element
