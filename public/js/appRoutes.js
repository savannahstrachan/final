angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})


		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})

		.when('/visits', {
			templateUrl: 'views/visits.html',
			controller: 'VisitsController'
		})

		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'ProjectsController'
		})

		.when('/instructor', {
			templateUrl: 'views/instructor.html',
			controller: 'InstructorController'
		})

		.when('/overview', {
			templateUrl: 'views/overview.html',
			controller: 'OverviewController'
		})

		.when('/alumni', {
			templateUrl: 'views/Alumni.html',
			controller: 'AlumniController'
		})

		.when('/faq', {
			templateUrl: 'views/faq.html',
			controller: 'FAQController'
		})

		.when('/prework', {
			templateUrl: 'views/prework.html',
			controller: 'PreworkController'
		});

	$locationProvider.html5Mode(true);

}]);