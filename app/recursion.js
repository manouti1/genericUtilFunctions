if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var listOfFiles = [];
      var dirs = [];
  
      function processDir(dir) {
        var i;
        var len;
        var file;
        var files = dir.files;
  
        dirs.push( dir.dir );
  
        for (i = 0, len = files.length; i < len; i++) {
          file = files[i];
          if (typeof file === 'string') {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              listOfFiles.push(files[i]);
            }
          } else {
            processDir(files[i]);
          }
        }
  
        dirs.pop();
      }
  
      processDir(data);
  
  
      return listOfFiles;
    },

    permute: function(arr) {
    }
  };
});
