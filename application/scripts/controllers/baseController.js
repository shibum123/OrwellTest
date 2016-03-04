function baseController($scope, $rootScope, $rootParams) {
  $scope.ordered = 0;
  
  $rootScope.orders = [];
  $scope.$on('orderEvent', function (event, val) {
    if (val == "ordered") {
      $scope.ordered++;
    } else {
      $scope.ordered--;
    }
  });

}

module.exports = baseController;