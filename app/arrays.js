if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    },

    remove: function (arr, item) {
      return arr.filter(function (ele) {
        return ele != item;
      });
    },

    removeWithoutCopy: function (arr, item) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) {
          arr.splice(i, 1);
        }
      }
      return arr;
    },

    append: function (arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function (arr) {
      arr.splice(arr.length - 1);
      return arr;
    },

    prepend: function (arr, item) {
      arr.unshift(item);
      return arr;

    },

    curtail: function (arr) {
      arr.shift();
      return arr;
    },

    concat: function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function (arr, item) {
      var res = 0;

      for (let i = 0; i < arr.length; i++)
        if (item == arr[i])
          res++;

      return res;
    },

    duplicates: function (arr) {
      var sorted_arr = arr.slice().sort();
      var results = [];
      for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i]);
        }
      }
      return results;
    },

    square: function (arr) {
      return arr.map(x => {
        return Math.pow(x, 2);
      });
    },

    findAllOccurrences: function (arr, target) {
      return arr.reduce(function (a, e, i) {
        if (e === target)
          a.push(i);
        return a;
      }, []); // [0, 3, 5]
    }
  };
});