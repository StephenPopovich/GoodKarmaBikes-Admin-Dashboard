angular.module('adminApp')
.controller('deleteModalCtrl', [
'$scope',
'$state',
function($scope, $uibModalInstance, $log, items){

  $scope.items = items
  //item will eventualy be the item were going to delete, this controller will handel all deletes
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  }

  $scope.cancel = function() {
     $uibModalInstance.dismiss('cancel');
  }

}]);
