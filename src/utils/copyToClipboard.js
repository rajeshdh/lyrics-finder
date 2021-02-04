// A minimal polyfill for `navigator.clipboard.writeText()` that works most of the time in most modern browsers.
// Note that on Edge this may call `resolve()` even if copying failed.
// See https://github.com/lgarron/clipboard-polyfill for a more robust solution.
// License: public domain
function writeText(str) {
    return new Promise(function(resolve, reject) {
  
      /********************************/
      var range = document.createRange();
      range.selectNodeContents(document.body);
      document.getSelection().addRange(range);
      /********************************/
  
      var success = false;
      function listener(e) {
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
        success = true;
      }
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
  
      /********************************/
      document.getSelection().removeAllRanges();
      /********************************/
  
      success ? resolve(): reject();
    });
}
export default writeText;