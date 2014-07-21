//alert functionality
var _canvasDisableFingerprintAlertDisplayed = false;
var alertUser = function() {
  if (!_canvasDisableFingerprintAlertDisplayed) {
    alert('I am trying to read image data from a canvas, a method which can be used to track your browser.\n\nIf you want to allow this, disable the \'Canvas Fingerprint Eliminator\' extension and reload the page.');
  }
  _canvasDisableFingerprintAlertDisplayed = true;
}

//disable stuff
var originalGetContextFunction = HTMLCanvasElement.prototype.getContext;

HTMLCanvasElement.prototype.getContext = function() {
  console.log('getImageData() has been removed from contexts retrieved from HTMLCanvasElements to guard against canvas fingerprinting. To restore functionality, disable the \'Canvas Fingerprint Eliminator\' extension and reload the page.');
  alertUser();
  var ctx = originalGetContextFunction.apply(this, arguments);
  delete ctx.getImageData;
  return ctx;
};

HTMLCanvasElement.prototype.toDataURL = function() {
  console.log('toDataURL() has been removed from HTMLCanvasElements to guard against canvas fingerprinting. To restore functionality, disable the \'Canvas Fingerprint Eliminator\' extension and reload the page.');
  alertUser();  
};

HTMLCanvasElement.prototype.toBlob = function() {
  console.log('toBlob() has been removed from HTMLCanvasElements to guard against canvas fingerprinting. To restore functionality, disable the \'Canvas Fingerprint Eliminator\' extension and reload the page.');
  alertUser();  
};
