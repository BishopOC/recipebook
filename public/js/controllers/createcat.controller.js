(function() {
  angular.module('recipebook')
         .controller('CreateCatController', CreateCatController);

  CreateCatController.$inject = ['$scope', 'CategoryService', 'UserService', '$location', '$sce'];

  function CreateCatController($scope, CategoryService, UserService, $location, $sce){
    $scope.create = create;
    var user = UserService.currentUser();

    function create(post){
      var userId = UserService.currentUser()._id;
      post.author = userId;
      CategoryService.create(post)
                 .then(function(){
                   $location.path(`/recipecategories/${user.name}`);
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
