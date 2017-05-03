(function() {
  angular.module('recipebook')
         .controller('ReadController', ReadController);

  ReadController.$inject = ['$scope', '$routeParams', 'PostService', '$sce'];

  function ReadController($scope, $routeParams, PostService, $sce){
    populate();

    function populate(){
      var postId = $routeParams.postId;
      PostService.getOne(postId)
                 .then(function(response){
                    $scope.post = response.data.posts[0];
                    $scope.MytrustedHtml = $sce.trustAsHtml(response.data.posts[0].body);

                 });

    }
    function UserId(){
      var id = $routeParams.UserId;
      UserService.getOne(id);

    }
  }
}());
