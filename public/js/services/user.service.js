(function() {
  angular.module('recipebook')
         .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var base = '/users';

    function signup(user){
      return $http.post('/signup', user)
                  .then(function(response){
                    return response;
                  });
    }
    function getAll(){
      return $http.get(base)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function getOne(user){
      var url = `${base}/${user._id}`;
      return $http.get(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function update(user){
      var url = `${base}/${user._id}`;
      return $http.put(url, user)
                  .then(function(repsonse){
                    console.log(response);
                  });
    }
    function deleteUser(user){
      var url = `${base}/${user._id}`;
      return $http.delete(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    return {
      signup: signup,
      getAll: getAll,
      getOne: getOne,
      update: update,
      delete: deleteUser,
    }
  }
}());
