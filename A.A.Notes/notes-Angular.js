// DAY 1 NOTES
// HTML
<!DOCTYPE html>
<html ng-app="firstApp">

  <head>
    <script data-require="angularjs@1.6.2" data-semver="1.6.2" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body ng-controller="mainCtrl">
    <h3>A lot together</h3>
    <input ng-model="newFood"/>
    <button ng-click="foods.push(newFood)">Add</button>

    <div ng-repeat="food in foods">
      {{food}}
    </div>


    <h3>Show/Hide - ng-show & ng-hide</h3>

    <div ng-show="isAwesome">You are awesome</div>

    <div ng-hide="isAwesome">You are not awesome</div>

    <div ng-if="isAdmin">You are an admin</div>

    <h3>Events - ng-click</h3>

    <button ng-click="isAwesome = !isAwesome">Toggle Awesome</button>
    <button ng-click="toggleClick()">Toggle Awesome with function</button>

    <h3>One-way binding - Double mustache</h3>
    {{ test }}

    <h3>Two-way binding - ng-model</h3>

    <input ng-model="twoWay"/>

    {{ twoWay }}


    <h3>Lists - ng-repeat</h3>

    <ul>
      <li ng-repeat="c in comics">
          {{ "Comic : " + c.toUpperCase() }}
      </li>
    </ul>

    <h3>Filter - ng-repeat</h3>

    <input ng-model="comicFilter"/>

    <ul>
      <li ng-repeat="c in comics | filter: comicFilter">
          {{ "Comic : " + c.toUpperCase() }}
      </li>
    </ul>

    <h3>Advanced Filter - ng-repeat</h3>

    Title: <input ng-model="movieFilter.title"/>
    <br/>
    Year: <input ng-model="movieFilter.year"/>

    <ul>
      <li ng-repeat="m in movies | filter: movieFilter">
          {{ m.title.toUpperCase() }} - ( {{m.year}} ) :: <strong>{{m.stars}}</strong>
      </li>
    </ul>

  </body>

</html>


// SCRIPT.JS
// Code goes here

angular.module("firstApp", [])

angular.module("firstApp")
       .controller("mainCtrl", function($scope, $timeout){
          $scope.test = "DM20 wins!"

          $timeout(function(){
            $scope.test = "DM20 really really wins!"
          }, 2000);

          $scope.twoWay = "Start text"

          $scope.comics = ["Batman", "Superman", "wolverine", "watchman", "wonderwoman"];

          $scope.foods = [];

          $scope.isAwesome = true;

          $scope.isAdmin = true;

          $scope.toggleClick = function(){
            $scope.isAwesome = !$scope.isAwesome;
          }

          $scope.movies = [{
            title: "Logan",
            year: 2017,
            stars: 4.5
          }, {
            title: "Interstellar",
            year: 2015,
            stars: 4
          }, {
            title: "Lego",
            year: 1999,
            stars: 3.5
          }]
       })












  // PART 2
// APP.JS
angular.module('userProfiles', [])

// CONTROLLER.JS
angular.module('quoteBook').controller('MainController', function($scope, mainService){

    $scope.getQuote = function(){
      $scope.quoteBook = mainService.getQuote();
    }

    $scope.getQuote();

    $scope.toggleFavorite = mainService.toggleFavorite;

});

// INDEX.HTML
<!DOCTYPE html>
<html ng-app="userProfiles">
<head>
    <meta charset="utf-8">
    <title>mini-userProfiles</title>
    <link rel="stylesheet" href="styles.css"></link>
</head>
<body ng-controller="MainController">

    <div ng-repeat="user in users" ng-class="{favorite: user.isFavorite}">
      <img ng-src="{{user.avatar}}"></img>
      <span>{{user.first_name}}</span>
      <span>{{user.last_name}}</span>
      <button ng-click="toggleFavorite($index)">Favorite</button>

     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.js"></script>
     <script src="app.js"></script>
     <script src="controller.js"></script>
     <script src="service.js"></script>
</body>
</html>


// SERVICE.JS
angular.module('userProfiles').service('mainService', function(){
    var data = [{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 1,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 2,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
}]

this.getUsers = function() {
  return data;
}

this.toggleFavorite = function(userIndex) {
  data[userIndex].isFavorite = !data[userIndex].isFavorite;
  }
})

// STYLES.CSS
.favorite {
    background-color: lightblue
}













  // PART 3

  var promise = $http.get('http://thehappydogplace.com/api/dogs');
  // $http.put('http://thehappydogplace.com/api/dogs');
  // $http.post('http://thehappydogplace.com/api/dogs');
  // $http.delete('http://thehappydogplace.com/api/dogs');

    promise.then(function(results) {
        if(status === 200)

      var status = results.status;
      var dogs = results.data;
    })


    var promise = $htp ({
      url: 'https://AnyUrlCanGoHere.com/api/Dogs',
      method: "POST",
      data: {name: 'Mee Sir'}
    });

// Example page
// INDEX.HTML
<!DOCTYPE html>
<html ng-app="userProfiles">
<head>
  <title>User Profiles</title>
</head>
<body ng-controller="MainController">
  <button ng-click="prev()" ng-disabled="currentPage == 1">Previous</button>
  Page : {{currentPage}}
  <button ng-click="next()" ng-disabled="currentPage == total_pages">Next</button>
  <div ng-repeat="user in users">
    <h1>{{user.first_name}} {{user.last_name}}</h1>
    <img src="{{user.avatar}}">
    <hr>
  </div>
<script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js"></script>
<script src="app.js"></script>
<script src="controller.js"></script>
<script src="service.js"></script>
</body>
</html>


// CONTROLLER.JS
angular.module('userProfiles').controller('MainController', function ($scope, mainService) {

  $scope.currentPage = 1;

  $scope.getUsers = function () {
    var promise = mainService.getUsers($scope.currentPage);

    promise.then(function (results) {
      if (results.status === 200) {
        $scope.total_pages = results.data.total_pages;
        $scope.users = results.data.data;
      }
    })
  }
  $scope.getUsers();

  $scope.prev = function () {
    $scope.currentPage--;
    if ($scope.currentPage < 1) {
      $scope.currentPage = 1;
    } else {
      $scope.getUsers();
    }
  }

  $scope.next = function () {
    $scope.currentPage++;
    if ($scope.currentPage > $scope.total_pages) {
      $scope.currentPage = 4;
    } else {
      $scope.getUsers();
    }
  }

});


// SERVICE.JS
angular.module('userProfiles').service('mainService', function($http) {

  this.getUsers = function(pageNum) {
        return $http({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=' + pageNum
        })
  };


});
