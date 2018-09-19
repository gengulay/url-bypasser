var myApp = angular.module('myApp',[]);

myApp.controller('torjackanController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';


$scope.torjack = function () {

if($scope.name == undefined) {
  $scope.name = "";
}


    var n = $scope.name.indexOf("patorjack");

    var newString = $scope.name.substr(n)

    newString = newString.replace(/%2F/g, "/");

    $scope.result = newString;

    $scope.name="";




}






}]);
