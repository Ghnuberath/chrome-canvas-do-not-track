canvas-do-not-track
==================

An unpacked chrome extension (shim) which deletes toDataURL from Canvases, and getImageData from all types of Canvas contexts.

To install:
- Clone this repository, or download it as a zip
- Navigate to chrome://extensions/ in your chrome browser
- Enable 'developer mode' in the top right hand corner
- Click 'Load unpacked extension...', and choose the cloned/unzipped directory
- Try turning the extension on and off while using http://www.browserleaks.com/canvas as a test

### Why

This plugin was specifically designed to mitigate HTML5 canvas fingerprinting as described here: https://securehomes.esat.kuleuven.be/~gacar/persistent/index.html.  There is no particular reason why anybody (outside of a developer running tests) should be able to read what pixels have been rendered to a canvas.  However, if there is a chance..

### TODO

Allow the user to selectively disable the extension on specific websites due to some super incredibly special need for JavaScript to be able to know what was rendered on a canvas.
