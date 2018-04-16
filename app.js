var myDogApp = angular.module("myDogApp", []);



myDogApp.controller('DogController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
//gets dog at dogs end point in db.json
  $scope.getDogs = function() {
    $http.get("http://localhost:4000/mydogs")
      .then(function(response) {
        $scope.allDogs = response.data
      });
  }

  $scope.deleteDog = function(index) {
    $http.delete("http://localhost:4000/mydogs/" + index)
       .then(
           function(response){
             $scope.getDogs();
           },
           function(response){
             console.log(response)
             // failure call back
           }
        );



  }


//calls api to get random image
  $scope.myFunc = function() {
    $http.get("https://dog.ceo/api/breeds/image/random")
      .then(function(response) {
        $scope.randomDog = response.data;
      });
  }

//empty array to hold list of dogs
  $scope.allDogs = [];

//post to end point of new image and name of dogs
  $scope.keepDogs = function(allDogs) {
    $http({
      method: 'POST',
      url: 'http://localhost:4000/mydogs',
      data: {
        name: $scope.randomDog.name,
        message: $scope.randomDog.message
      },
    }).then(function(response) {
      $scope.getDogs();
    })
  }

//calls dogs list
  $scope.getDogs();

}]);
