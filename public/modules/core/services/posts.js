angular.module('core').factory('posts', ['$http', function($http){
  var postData = {
    posts: []
  };

  postData.getAll = function() {
    return $http.get('/posts').success(function(data) {
      angular.copy(data, postData.posts);
    });
  };

  postData.create = function(post) {
    console.log('post: ', post);
    return $http.post('/posts', post).success(function(data) {
      console.log(data);
      postData.posts.push(data);
      console.log(postData);
    });
  };

  postData.get = function(id) {
    console.log('trying ', id);
    return $http.get('/posts/' + id).then(function(res) {
      return res.data;
    });
  };
  console.log(postData);
  return postData;
}]);