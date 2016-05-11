angular.module('adminApp')
.controller('newsCtrl', [
'$scope',
'$state',
function($scope,$state, $uiModal){
  //Accordian config
  $scope.animationsEnabled = true;
  console.log("hi")
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


  $scope.removeModal = function() {
  console.log("yo")
   var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: 'modal/_deleteModal.html',
      controller: 'modal.js'
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

   }
}]);
