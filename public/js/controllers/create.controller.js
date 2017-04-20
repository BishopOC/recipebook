(function() {
  angular.module('recipebook')
         .controller('CreateController', CreateController);

  CreateController.$inject = ['$scope', 'PostService', 'UserService', '$location', '$sce'];

  function CreateController($scope, PostService, UserService, $location, $sce){
    $scope.create = create;
    var user = UserService.currentUser();

    function create(post){
      var userId = UserService.currentUser()._id;
      post.author = userId;
      PostService.create(post)
                 .then(function(){
                   $location.path(`/recipebook/${user.name}`);
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
