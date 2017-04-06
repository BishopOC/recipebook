(function() {
  angular.module('recipebook')
         .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'SignupController',
      templateUrl: 'html/views/signup.html',
      restricted: {
        access:false
      }
    })
    .when('/create', {
      controller: 'CreateController',
      templateUrl: 'html/views/create.html',
      restricted: {
        access:false
      }
    })
    .when('/recipes', {
      controller: 'RecipesController',
      templateUrl: 'html/views/recipes.html',
      restricted: {
        access:false
      }
    })
    .otherwise({
      redirectTo: '/',
      restricted: {
        access:false
      }
    });
  }
}());