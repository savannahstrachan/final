angular.module('AdminCtrl', []).controller('AdminController', function($scope) {

    $scope.tagline = 'Existing Database';

    function loginFunc() {
    var txt;
    var person = prompt("Username:", "");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}

});