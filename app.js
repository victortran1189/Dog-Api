var myDogApp = angular.module("myDogApp", ["dragularModule"]);



myDogApp.controller('DogController',['$scope', '$http', '$timeout', 'dragularService' , function($scope, $http, $timeout, dragularService ) {

dragularService('.containerVertical');

$scope.myFunc = function() {

  $http.get("https://dog.ceo/api/breeds/image/random")
  .then(function(response) {
    $scope.randomDog = response.data;

    console.log($scope.randomDog)
  });
}

$scope.allDogs = [];

$scope.keepDogs = function(allDogs){
    if ($scope.allDogs.indexOf($scope.randomDog) === -1){
      $scope.allDogs.push($scope.randomDog);
      console.log($scope.allDogs)
    } else {
      $timeout(function() {
        $scope.message = "";
      }, 3000);
      $scope.message = "This is a duplicate"
    }

  }

  $scope.myName = function(dog){
    alert("hi my name is"  + " " + dog.name)
  }

}]);
