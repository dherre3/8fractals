// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('8fractals', ['ionic', '8fractals.controllers', '8fractals.services','ngAnimate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    controller:'TabsMainController',
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('tab.dash-edit',{
  url: '/dash/das',
    views: {
    'tab-dash': {
      templateUrl: 'templates/tab-node-edit.html',
      controller: 'NodeEditController'
    }
  }
})
.state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('forms',{
    url:'/forms',
    templateUrl:'templates/forms-template.html',
    abstract:true,
    controller:'FormsController'
  })
  .state('forms.forgot-password',{
      url:'/forgot-password',
      views:{
        'forms':{
          templateUrl:'templates/forms/forgot-password.html',
          controller:'FormsController'
        }
      }
  })
  .state('forms.register',{
    url:'/register',
    views:{
      'forms':{
        templateUrl:'templates/forms/register.html',
        controller:'FormsController'
      }
    }
  })
   .state('forms.login', {
    url: '/login',
    views:{
      'forms':{
        templateUrl:'templates/forms/login.html',
        controller:'FormsController'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/forms/login');

})
.run(function ($rootScope, $state,$timeout)
{
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams)
  {
    console.log(toState.name);
    if(toState.name=='tab.chat-detail'||toState.name=='tab.dash-edit'){
      $rootScope.showBackButton=true;
    }else{
      $rootScope.showBackButton=false;
    }
    if(toState.name=='forms.login'||toState.name=='forms.register'||toState.name=='forms.forgot-password'){
      $rootScope.showFractalsMenu=false;

    }else{
      $rootScope.showFractalsMenu=true;
    }


  });
});
