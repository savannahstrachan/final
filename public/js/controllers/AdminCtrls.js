angular.module('AdminCtrl', []).controller('AdminController', function($scope) {

    $scope.tagline = 'Existing Database';
    $scope.showMe = "null";

    $scope.subClick = function() {
      console.log('hellooo');
     
      $scope.showMe = "show";
    }


});