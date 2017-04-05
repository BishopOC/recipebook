(function() {
  angular.module('recipebook')
         .factory('PostService', PostService);

  PostService.$inject = ['$http', 'UserService'];

  function PostService($http, UserService){
    var base = '/posts';

    function getAll(){
      return $http.get(base)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function getOne(id){
      var url = `${base}/${id}`
      return $http.get(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function create(post){
      return $http.post(base, post)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function update(post){
      var url = `${base}/${post._id}`
      return $http.put(url, post)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function deletePost(post){
      var url = `${base}/${post._id}`
      return $http.delete(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deletePost
    }
  }
}());
