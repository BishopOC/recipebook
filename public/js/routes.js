(function() {
  angular.module('recipebook')
         .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'SignupController',
      templateUrl: 'html/views/signup.html',
      css: '../css/signup.css',
      restricted: {
        access:false
      }
    })
    .when('/create', {
      controller: 'CreateController',
      templateUrl: 'html/views/create.html',
      css: '../css/create.css',
      restricted: {
        access:true
      }
    })
    .when('/edit/:postId', {
      controller: 'EditController',
      templateUrl: 'html/views/edit.html',
      css: '../css/edit.css',
      restricted: {
        access:true
      }
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'html/views/login.html',
      css: '../css/login.css',
      restricted: {
        access:false
      }
    })
    .when('/recipebook', {
      controller: 'RecipelistController',
      templateUrl: 'html/views/recipelist.html',
      css: '../css/recipelist.css',
      restricted: {
        access: false
      }
    })
    .when('/read/:postId',{
        controller: 'ReadController',
        templateUrl: 'html/views/read.html',
        css: '../css/read.css',
        restricted: {
          access: false
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
