(function() {
  angular.module('recipebook')
          .controller('RecipelistCatController', RecipelistCatController);

  RecipelistCatController.$inject = ['$filter', '$scope', 'PostService', '$location', '$routeParams', 'UserService', 'CategoryService'];

  function RecipelistCatController($filter, $scope, PostService, $location, $routeParams, UserService, CategoryService){
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

                    $scope.category = response.data.posts[0];

                 });

    }


    populatePosts();
    function populatePosts(posts){
      var categoryId = $routeParams.categoryId;
      PostService.getAll(posts)
                .then(function(response){
                  $scope.posts = response.data.posts;
                  $scope.categoryId = categoryId;
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
