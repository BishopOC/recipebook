(function() {
  angular.module('recipebook')
         .controller('ReadCatController', ReadCatController);

  ReadCatController.$inject = ['$scope', '$routeParams', 'CategoryService', '$sce'];

  function ReadCatController($scope, $routeParams, CategoryService, $sce){
    populate();

    function populate(){
      var categoryId = $routeParams.categoryId;
      CategoryService.getOne(categoryId)
                 .then(function(response){
                   console.log(response);
                    $scope.category = response.data.categories[0];
                    $scope.MytrustedHtml = $sce.trustAsHtml(response.data.categories[0].title);

                 });

    }
    function UserId(){
      var id = $routeParams.UserId;
      UserService.getOne(id);

    }
  }
}());
