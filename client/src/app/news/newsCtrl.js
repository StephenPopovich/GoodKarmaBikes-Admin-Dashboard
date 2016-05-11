angular.module('adminApp')
.controller('newsCtrl', [
'$scope',
'$state',
function($scope,$state){
  //Accordian config
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.callMeWhenCompiled = function () {
    console.log("----->>>>> Called");
  };

  //new functions start here
  $scope.remove = function() {
    console.log('getting in remove function')

  };

  $scope.save = function() {
    console.log('getting in save function')
  };

}]);
