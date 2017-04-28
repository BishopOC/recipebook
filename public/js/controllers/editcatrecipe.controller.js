(function() {
  angular.module('recipebook')
         .controller('EditCatRecipeController', EditCatRecipeController);

  EditCatRecipeController.$inject = ['$scope', '$routeParams', 'PostService', '$location', 'UserService', 'CategoryService'];

  function EditCatRecipeController($scope, $routeParams, PostService, $location, UserService, CategoryService){
    $scope.edit = edit;

    var user = UserService.currentUser();

    editInit();
    function editInit(){
      var id = $routeParams.postId;
      PostService.getOne(id)
                 .then(function(response){
                   $scope.post = response.data.posts[0];
                 })
                 .catch(function(){
                   console.log('errorr');
                 });
    }
    populate();
    function populate(){
      var categoryId = $routeParams.categoryId;
      CategoryService.getOne(categoryId)
                 .then(function(response){

                  return  $scope.category = response.data.posts[0];

                 });
    }
    var category = $routeParams.categoryId;

    function edit(post){
      var userId = UserService.currentUser()._id;
      post.author = userId;
      var category = $routeParams.categoryId;
      PostService.update(post)
                 .then(function(){
                   $location.path(`/recipebook/${category}/${user.name}`);
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
