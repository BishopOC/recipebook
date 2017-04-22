(function() {
  angular.module('recipebook')
         .controller('EditCatController', EditCatController);

  EditCatController.$inject = ['$scope', '$routeParams', 'CategoryService', '$location', 'UserService'];

  function EditCatController($scope, $routeParams, CategoryService, $location, UserService){
    $scope.edit = edit;

    var user = UserService.currentUser();

    editInit();
    function editInit(){
      var id = $routeParams.categoryId;
      CategoryService.getOne(id)
                 .then(function(response){
                   $scope.category = response.data.posts[0];
                 })
                 .catch(function(){
                   console.log('errorr');
                 });
    }
    function edit(post){
      CategoryService.update(post)
                 .then(function(response){
                   $location.path(`/recipecategories/${user.name}`);
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
