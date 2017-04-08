(function() {
  angular.module('recipebook')
          .controller('RecipelistController', RecipelistController);

  RecipelistController.$inject = ['$scope', 'PostService'];

  function RecipelistController($scope, PostService){
    $scope.posts = [];

    populatePosts();
    function populatePosts(posts){
      PostService.getAll(posts)
                .then(function(response){
                  $scope.posts = response.data.posts;
                });
    }
  }
}());
