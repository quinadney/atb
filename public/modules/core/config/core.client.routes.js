'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('submissions', {
        url: '/submissions',
        templateUrl: 'modules/core/views/submissions.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts) {
            return posts.getAll();
          }]
        }
      })
    .state('form', {
      url: '/form',
      templateUrl: 'modules/core/views/form.html',
      controller: 'MainCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'modules/core/views/blog.html',
      controller: 'MainCtrl'
    });
	}
]);