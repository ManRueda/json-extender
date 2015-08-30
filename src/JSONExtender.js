(function (root, factory) {
  if (typeof define === 'function') {
    // RequireJS
    return define(function() {
        return factory();
    });
  } else if (typeof module === 'object' && module.exports) {
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.JSONExtender = factory();
  }
}(this, function () {

  return {
    deleteCode: '__DELETE__',
    extend: function extend(original, extension){
      var keys = Object.keys(extension);

      for (var i = 0; i < keys.length; i++){
        var key = keys[i];

        if (original[key] === undefined){
          //its a new key
          original[key] = extension[key];
        }else if (extension[key] instanceof Object && original[key] instanceof Object){
          //the extension is an object
          original[key] = this.extend(original[key], extension[key]);
        }else {
          if (extension[key] === this.deleteCode){
            delete original[key];
          }else{
            original[key] = extension[key];
          }
        }
      }
      return original;
    }
  };

}));
