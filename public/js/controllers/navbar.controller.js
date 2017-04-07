(function() {
  angular.module('recipebook')
        .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'UserService'];

  function NavbarController($scope, UserService){
    $scope.isLoggedIn = UserService.isLoggedIn;
  }
}());