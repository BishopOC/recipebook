(function() {
  angular.module('recipebook')
          .controller('RecipelistController', RecipelistController);

  RecipelistController.$inject = ['$scope', 'PostService', '$location', '$routeParams', 'UserService'];

  function RecipelistController($scope, PostService, $location, $routeParams, UserService){
    $scope.posts = [];
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.user = [];


    populatePosts();
    function populatePosts(posts){
      PostService.getAll(posts)
                .then(function(response){
                  $scope.posts = response.data.posts;
                });
    }
    function edit(post){
      var url = `edit/${post._id}`;
      $location.path(url);
    }
    function deletePost(post){
      var result = confirm('Are you sure you want to delete this recipe?');
      if (result) {
      PostService.delete(post)
                 .then(populatePosts);
               }
    }
  }
}());
