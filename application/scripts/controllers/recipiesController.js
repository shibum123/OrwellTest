function recipiesController($scope, $uibModal, $rootScope, $sce) {
    $rootScope.recipies = $scope.recipies = [
                        [
                        {id: 1, imageName: "/images/image1.jpg", name:'Recipe 1', difficulty: 'medium', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false},
                        {id: 2, imageName: "/images/image2.jpg", name:'Recipe 2', difficulty: 'medium', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false},
                        {id: 3, imageName: "/images/image3.jpg", name:'Recipe 3', difficulty: 'hard', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false},
                        {id: 4, imageName: "/images/image2.jpg", name:'Recipe 4', difficulty: 'hard', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false}
                        ]
                        ];
    $scope.doAddRecipe = function(data){
        if($scope.recipies[$scope.recipies.length-1].length % 4 != 0){
            var row = $scope.recipies.length-1;
            var col = $scope.recipies[$scope.recipies.length-1].length;
            $scope.recipies[row].push({id: row * 4 + col + 1, imageName: "/images/image1.jpg", name:data.name , difficulty: data.difficulty, preparationTime: data.preparationTime, dateSubmitted: new Date(), selected:false});
        }else{
            $scope.recipies.push([]);
            $scope.recipies[$scope.recipies.length-1].push({id: ($scope.recipies.length-1) * 4 +1, imageName: "/images/image1.jpg", name:data.name , difficulty: data.difficulty, preparationTime: data.preparationTime, dateSubmitted: new Date(), selected:false});
        }
    }
        
    $scope.addRecipe = function(){
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/modalDialog.html',
            controller: 'modalInstanceCtrl',
            resolve: {
                modalOptions: {              
                  hideCancel: false,
                  headerText: 'Add Recipe'
                }
            }
        });
 
        modalInstance.result.then(function (data) {
           $scope.doAddRecipe(data);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
        
    }   
}

module.exports = recipiesController;