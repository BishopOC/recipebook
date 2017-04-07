(function() {
  angular.module('recipebook')
         .controller('CreateController', CreateController);

  CreateController.$inject = ['$scope', 'PostService', 'UserService', '$location'];

  function CreateController($scope, PostService, UserService, $location){
    $scope.create = create;

    function create(post){
      var userId = UserService.currentUser()._id;
      post.author = userId;
      PostService.create(post)
                 .then(function(){
                   $location.path('/recipes');
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
