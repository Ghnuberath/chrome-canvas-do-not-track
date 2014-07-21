var originalGetContextFunction = HTMLCanvasElement.prototype.getContext;

HTMLCanvasElement.prototype.getContext = function() {
  console.log('getImageData() has been removed from contexts retrieved from HTMLCanvasElements to guard against canvas fingerprinting. To restore functionality, disable the \'Canvas Fingerprint Eliminator\' extension.');
  var ctx = originalGetContextFunction.apply(this, arguments);
  delete ctx.getImageData;
  return ctx;
};

HTMLCanvasElement.prototype.toDataURL = function() {
  console.log('toDataURL() has been removed from HTMLCanvasElements to guard against canvas fingerprinting. To restore functionality, disable the \'Canvas Fingerprint Eliminator\' extension.');
}
