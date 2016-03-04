function recipeController($scope, $rootScope, $rootParams) {
    var row = Math.floor($rootParams.id / 4);
    var col = $rootParams.id % 4;
    if(col == 0){
        row--;
        col = 4;
    }
    $scope.recipe =  $rootScope.recipies[row][col-1];
    $scope.setSelected = function(recipe){
        $scope.recipe.selected = !$scope.recipe.selected;
        if($scope.recipe.selected){
            $scope.$emit('orderEvent', 'ordered');
            $rootScope.orders.push(recipe);
        }else{
            $scope.$emit('orderEvent', 'orderRemoved');
            $rootScope.orders.removeItemAt(recipe.id-1);
        }     
    }
    
}

module.exports = recipeController;