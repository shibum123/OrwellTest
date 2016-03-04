describe('RecipiesController', function() {
  beforeEach(module('mainApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.doAddRecipe', function() {
    it('Evaluates if the recipe is added correctly to the multi dimensional array', function() {
      var $scope = {};
      var controller = $controller('recipiesController', { $scope: $scope });
      var item = {id: 5, imageName: "/images/image2.jpg", name:'Recipe 5', difficulty: 'hard', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false};
      $scope.recipies = [
                          [
                          {id: 1, imageName: "/images/image1.jpg", name:'Recipe 1', difficulty: 'medium', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false},
                          {id: 2, imageName: "/images/image2.jpg", name:'Recipe 2', difficulty: 'medium', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false},
                          {id: 3, imageName: "/images/image3.jpg", name:'Recipe 3', difficulty: 'hard', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false},
                          {id: 4, imageName: "/images/image2.jpg", name:'Recipe 4', difficulty: 'hard', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false}
                          ]
                        ];
      expect($scope.recipies.length).toEqual(1);
      $scope.doAddRecipe(item);
      expect($scope.recipies.length).toEqual(2);
      expect($scope.recipies[1][0].name).toEqual('Recipe 5');
      
      item.id = 6;
      item.name = 'Recipe 6';
      $scope.doAddRecipe(item);
      expect($scope.recipies.length).toEqual(2);
      expect($scope.recipies[1][1].name).toEqual('Recipe 6');
    });
  });
});