angular.module('AdminService', []).service('Admin', ['$http', function($scope, $http, ApplicationService) {


 // $scope.dispClick = function (res){
 	$scope.displayName = MainServ.getName();
       console.log($scope.displayName);

}]);