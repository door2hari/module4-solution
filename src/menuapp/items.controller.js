(function () {
'use strict';

angular.module('data')
.controller('ItemsCtrl', ItemsCtrl);

ItemsCtrl.$inject = ['items'];
function ItemsCtrl(items) {
  var cat = this;
  console.log(items);
  cat.menuItems = items.menu_items;
  cat.items = items;
}

})();
