(function() {
  angular.module('recipebook')
         .controller('RecipesController', RecipesController);

  RecipesController.$inject = ['$scope', 'PostService', '$location'];

  function RecipesController($scope, PostService, $location){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [];

    populatePosts();
    function populatePosts(){
      PostService.getAll()
                 .then(function(response){
                   $scope.posts = response.data.posts;
                 })
                 .catch(function(err){
                   console.log(err);
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
