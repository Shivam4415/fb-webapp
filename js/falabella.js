(function (window, document, undefined) {
    var F = {
      version: "0.1",
      assert: false, // commented production code contains 'if (N.assert'
      debug: false,
    };
  
    function expose() {
      var oldF = window.F;
  
      F.noConflict = function () {
        window.F = oldF;
        return this;
      };
  
      window.F = F;
    }
  
    // define M as a global M variable, saving the original M to restore later if needed
    if (typeof window !== "undefined") {
      expose();
    }
  
    String.prototype.format = String.prototype.f = function () {
      var s = this,
        i = arguments.length;
  
      while (i--) {
        s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
      }
      return s;
    };
    
    F.Page = {};
  
    F.Control = {};

    F.apiUrls = "http://localhost:5000";
  })(window, document);
  
  function chr(num) {
    return String.fromCharCode(num);
  }
  