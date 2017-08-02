angular.module('AlumniCtrl', []).controller('AlumniController', function($scope) {

	$scope.tagline = 'Nothing beats a pocket protector!';




		$scope.addInfo = function(response){
			
			console.log($scope.inputData);
    	
    	$http.post("https://final-project-loyno.herokuapp.com//add-alumni",
    		$scope.inputData).then(function(err, res){

    			$scope.inputData = {};
    			// res.send($scope.inputData);
    		})
        	}
        });






