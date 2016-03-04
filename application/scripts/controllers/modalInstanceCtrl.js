
function modalInstanceCtrl($scope, $modalInstance, modalOptions) {
  
  modalOptions.headerText = modalOptions.headerText ? modalOptions.headerText : 'Confirmation';

  $scope.modalOptions = modalOptions;
  
  var item = {id: 0, imageName: "/images/image2.jpg", name:'Recipe 0', difficulty: 'hard', preparationTime: '2 hours', dateSubmitted: '04/03/2016', selected:false};
  


  $scope.ok = function (result) {
    $modalInstance.close(result);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}
module.exports = modalInstanceCtrl;
