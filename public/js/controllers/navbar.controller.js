(function() {
  angular.module('recipebook')
        .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'UserService', '$location'];

  function NavbarController($scope, UserService, $location){
    $scope.isLoggedIn = UserService.isLoggedIn;
    $scope.hideSignup = $location.path() === '/';
    $scope.hideLogin = $location.path() === '/login';
    $scope.$watch(function(){
      return $location.path();
    },
    function(){
      $scope.hideSignup = $location.path() === '/';
      $scope.hideLogin = $location.path() === '/login';
    });
  }
}());
