(function() {
  angular.module('recipebook')
         .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'UserService', '$location'];

  function LoginController($scope, UserService, $location){
    $scope.user = {};
    $scope.login = login;

    function login(user){
      UserService.login(user)
                 .then(function(){
                   $location.path('/recipes');
                 })
                 .catch(function(err){
                   console.log(err);
                   $scope.user.password = '';
                 });
    }
  }
}());
