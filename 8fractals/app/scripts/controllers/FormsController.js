angular.module('8fractals.controllers').
controller('FormsController',['$scope', '$timeout','$rootScope', '$state', function($http, $scope, $timeout,$rootScope,$state){
  $rootScope.showFractalsMenu=false;
  $scope.login=function(){

    var req = {
 method: 'POST',
 url: 'localhost:8888/fractal-beta/login.php',
 headers: {
   'Content-Type': undefined
 },
 data: { username:$scope.loginUser.username,
          password:$scope.loginUser.password}
}
    $http(req).then(function(data){
      console.log(data);
      $state.go('tab.dash');
    }, function(error){
      console.log(error);
    });

  };
}]);
