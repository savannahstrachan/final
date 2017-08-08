angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/application', {
			templateUrl: 'views/application.html',
			controller: 'ApplicationController'
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

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'AdminController'
		})

		.when('/faq', {
			templateUrl: 'views/faq.html',
			controller: 'FAQController'
		});

	$locationProvider.html5Mode(true);

}]);