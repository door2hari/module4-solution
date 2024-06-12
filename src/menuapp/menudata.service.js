(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', '$q'];
function MenuDataService($http, $q) {
  var service = this;

  //return a promise with all categories
  service.getAllCategories = function () {

    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'  
    })
    .then( function (result) {
        console.log(result.data);
      deferred.resolve(result.data);
    });

    return deferred.promise;
  };

  //return a promise with all items in a categories
  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();
    //if categoryShortName is not defined
    if (categoryShortName == "") {
      var choices = [];

      choices = ['L','A','B','SP','C','F','V','DK','VG','CU','NL','PF','FR','CM','FY','SO','DS','D','SR'];

      categoryShortName = choices[Math.floor(Math.random()*choices.length)];
    }

    //the https returned
    $http({
      method: 'GET',
      url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json',
    })
    .then( function (result) {
      deferred.resolve(result.data.menu_items);
    });

    return deferred.promise;
  };

}

})();
