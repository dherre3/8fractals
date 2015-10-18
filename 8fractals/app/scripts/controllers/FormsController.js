angular.module('8fractals.controllers').
controller('FormsController',['$scope', '$timeout','$rootScope', '$state', function($scope, $timeout,$rootScope,$state){
  $rootScope.showFractalsMenu=false;
  $scope.login=function(){
    $state.go('tab.dash');
  };
}]);
