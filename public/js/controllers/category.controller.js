(function() {
  angular.module('recipebook')
          .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['$scope', 'CategoryService', '$location', '$routeParams', 'UserService'];

  function CategoryController($scope, CategoryService, $location, $routeParams, UserService){
    $scope.category = [];
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.user = [];

    var user = UserService.currentUser();
    if(user && user.name){
      $scope.userId = user.name;
    }


      var id = $routeParams.categoryId;
      CategoryService.getAll(id)
                 .then(function(response){
                   $scope.categoryId = response.data.posts[0]._id;
                 })
                 .catch(function(){
                   console.log('errorr');
                 });




    populatePosts();
    function populatePosts(categories){
      CategoryService.getAll(categories)
                .then(function(response){
                  $scope.categories = response.data.posts;
                });
    }
    function edit(category){
      var url = `editcat/${category._id}`;
      $location.path(url);
    }
    function deletePost(category){
      CategoryService.delete(category)
                 .then(populatePosts);
    }
  }
}());
