(function() {
  angular.module('recipebook')
          .controller('RecipelistCatController', RecipelistCatController);

  RecipelistCatController.$inject = ['$scope', 'PostService', '$location', '$routeParams', 'UserService', 'CategoryService'];

  function RecipelistCatController($scope, PostService, $location, $routeParams, UserService, CategoryService){
    $scope.posts = [];
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.user = [];
    $scope.category = [];

    populate();
    function populate(){
      var categoryId = $routeParams.categoryId;
      CategoryService.getOne(categoryId)
                 .then(function(response){
                   console.log(response);
                    $scope.category = response.data.posts[0];

                 });

    }


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
      PostService.delete(post)
                 .then(populatePosts);
    }
  }
}());
