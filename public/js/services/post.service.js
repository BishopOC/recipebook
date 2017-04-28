(function() {
  angular.module('recipebook')
         .factory('PostService', PostService);

  PostService.$inject = ['$http', 'UserService'];

  function PostService($http, UserService){
    var base = '/posts';

    function getAll(){
      var options = {
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`
        }
      }
      return $http.get(base, options);
    }
    function getOne(id){
      var url = `${base}/${id}`;
      return $http.get(url);
    }
    function create(post){
      return $http.post(base, post);
    }
    function update(post){
      var url = `${base}/${post._id}`;
      var options = {
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`
        }
      }
      return $http.put(url, post, options);

    }
    function deletePost(post){
      var url = `${base}/${post._id}`
      var options = {
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`
        }
      }
      return $http.delete(url, options);
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
