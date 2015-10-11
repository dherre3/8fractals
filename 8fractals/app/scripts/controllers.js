angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicModal) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-down'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
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
.controller('FractalsController', function($scope,$ionicGesture) {
  $scope.menuSize='modal-in';
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
  $scope.closeMenu=function(){
    $scope.menuSize='modal-out';
    $scope.iconFractalMenu='rotateUp';
  }

});