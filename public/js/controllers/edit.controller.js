(function() {
  angular.module('recipebook')
         .controller('EditController', EditController);

  EditController.$inject = ['$scope', '$routeParams', 'PostService', '$location'];

  function EditController($scope, $routeParams, PostService, $location){
    $scope.edit = edit;

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
    function edit(post){
      PostService.update(post)
                 .then(function(response){
                   $location.path('/recipes');
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());