angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.Item = '';
$scope.Item = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, Item:'Chilli Cheese Fries', Price:"5$" },
{id:2, Item:'Veggie Burger',  Price:"7$" },
{id:3, Item:'Chicken Burger',  Price:"9$" },
{id:4, Item:'Tuna Wrap', Price:"8$" },
{id:5, Item:'Milkshakes', Price:"3$" },
{id:6, Item:'Cheese Pizza',Price:"10$" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.hideform = true; 
$scope.editUser = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.Item = '';
    $scope.Item = '';
    } else {
    $scope.edit = false;
    $scope.Item = $scope.users[id-1].Item;
    $scope.Item = $scope.users[id-1].Item; 
  }
};

$scope.$watch('Item', function() {$scope.test();});
$scope.$watch('Item', function() {$scope.test();});

});
