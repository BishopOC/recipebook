(function() {
  angular.module('recipebook')
         .controller('CreateCatRecipeController', CreateCatRecipeController);

  CreateCatRecipeController.$inject = ['$scope', 'PostService', 'UserService', '$location', '$sce', 'CategoryService', '$routeParams'];

  function CreateCatRecipeController($scope, PostService, UserService, $location, $sce, CategoryService, $routeParams){
    $scope.create = create;
    $scope.category = [];

    var user = UserService.currentUser();



    populate();
    function populate(){
      var categoryId = $routeParams.categoryId;
      CategoryService.getOne(categoryId)
                 .then(function(response){
                   console.log(response);
                    $scope.category = response.data.posts[0];

                 });

    }




    function create(post){
      var userId = UserService.currentUser()._id;
      post.author = userId;
      var categoryId = $routeParams.categoryId;
      CategoryService.getOne(categoryId)
                 .then(function(response){
                   console.log(response);
                    return category = response.data.posts[0];

                 });
      PostService.create(post)
                 .then(function(){
                   $location.path(`/recipebook/${category._id}/${user.name}`);
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
