angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state) {
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    $state.go('tab.dash-edit');
  };
  $scope.share = function(item) {
    alert('Delete Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  var colors=['red', 'blue','purple', 'green','yellow', 'lightgreen','orange'];
  $scope.items=[];
  for (var i = 0; i < 15; i++) {
    objectItem={};
    objectItem.id=i;
    objectItem.color=colors[i%7];
    $scope.items.push(objectItem);
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('NodeEditController', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('FractalsController', function($scope,$ionicGesture,$ionicHistory,$rootScope) {
  $scope.menuSize='modal-in';
  $rootScope.showBackButton=false;
  console.log($ionicGesture);
  $ionicGesture.on('swipedown',function(){console.log('boom')},angular.element(document.querySelector('#bottomFractalMenu')));
  $scope.toggleMenu=function(){
    ($scope.menuSize=='modal-in')?$scope.menuSize='modal-out':$scope.menuSize='modal-in';
    ($scope.iconFractalMenu=='rotateUp')?$scope.iconFractalMenu='':$scope.iconFractalMenu='rotateUp';
  };
  $scope.openMenu=function(){
    $scope.menuSize='modal-in';
    $scope.iconFractalMenu='';
    console.log('open');
  };
  $scope.goBack=function(){
    $ionicHistory.goBack();
  };
  $scope.closeMenu=function(){
    $scope.menuSize='modal-out';
    $scope.iconFractalMenu='rotateUp';
  }

});