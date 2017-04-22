(function() {
  angular.module('recipebook')
          .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['$scope', 'CategoryService', '$location', '$routeParams', 'UserService'];

  function CategoryController($scope, CategoryService, $location, $routeParams, UserService){
    $scope.categories = [];
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.user = [];


    populatePosts();
    function populatePosts(categories){
      CategoryService.getAll(categories)
                .then(function(response){
                  console.log(response);
                  $scope.categories = response.data.posts;
                });
    }
    function edit(post){
      var url = `edit/${post._id}`;
      $location.path(url);
    }
    function deletePost(category){
      CategoryService.delete(category)
                 .then(populatePosts);
    }
  }
}());
