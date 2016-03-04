var main = function ($timeout, $scope, $rootScope, $sce, $location, $uibModal) {
  var setUp = function () {
    $timeout(function () {
      $scope.formErrors = {};
      $rootScope.loginComplete = $rootScope.loginComplete || false;
    });
  },
  setLoggedInState = function (userId, password) {
      $rootScope.loggedInUserId = userId;
      $rootScope.loginComplete = true;
      $rootScope.password = password;
    },
	errorMap = {
      CREDENTIALS: 'User ID and Password are required'
    };
  setUp();
  $scope.login = function (credentials) {
    if (!credentials || !credentials.username || !credentials.password) {
      $scope.formErrors.errors = errorMap.CREDENTIALS;
    } else {
      setLoggedInState(credentials.username, credentials.password);
     // $scope.$apply(function () {
		 //   $location.path("/index");
	   //});
     $timeout(function() {
        $location.path("/index");
    }, 0);

    }
  };
};
if (typeof module !== 'undefined') {
  module.exports = main;
}
if (typeof define === 'function') {
  define(main);
}
