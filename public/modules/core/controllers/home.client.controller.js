'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);

angular.module('core').controller('MainCtrl', [
  '$scope', '$http', 'posts', '$stateParams',
  function($scope, $http, posts) {

    $scope.posts = posts.posts;

    $scope.post = "hi";
    $scope.thisForm = "Form goes here";

    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

    $scope.loadMore = function() {
      var last = $scope.images[$scope.images.length - 1];
      for(var i = 1; i <= 8; i++) {
        $scope.images.push(last + i);
      }
    };

    $scope.changeType = function(type) {
      $scope.type = type;

      if (type === 'event') {
        $scope.establishmentActive = false;
        $scope.eventActive = true;
      } else if (type === 'establishment') {
        $scope.eventActive = false;
        $scope.establishmentActive = true;
      }
    };

    $scope.createPost = function() {
      // return $http.get('/posts').success(function(data) {
      //   angular.copy(data, postData.posts);
      // });
      console.log(posts);
      // posts.getAll();
      // posts.getAll();
      posts.create({
        title: $scope.title,
        category: $scope.category,
        size: $scope.size,
        tags: $scope.tags,
        information: $scope.information
      });

      console.log({title: $scope.title,
        category: $scope.category,
        size: $scope.size,
        tags: [$scope.tags],
        information: $scope.information});

    };
  }]);

angular.module('core').run( ['$rootScope', '$state', '$stateParams',
  function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams; 
  }
]);