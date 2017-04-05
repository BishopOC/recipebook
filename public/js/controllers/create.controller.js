(function() {
  angular.module('recipebook')
         .controller('CreateController', CreateController);

  CreateController.$inject = ['$scope', 'PostService', 'UserService', '$location'];

  function CreateController($scope, PostService, UserService, $location){
    $scope.create = create;

    function create(post){
      PostService.create(post)
                 .then(function(response){
                   console.log(response);
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
