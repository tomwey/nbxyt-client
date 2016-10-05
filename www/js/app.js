// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('xiaoyoutong', ['ionic', 'xiaoyoutong.controllers', 'xiaoyoutong.services'])

.config(['$ionicConfigProvider', function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');

  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text('');
}])

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
      StatusBar.styleDefault();
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
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  // 校友组织列表
  .state('tab.organizations', {
    url: '/organizations',
    views: {
      'tab-home': {
        templateUrl: 'templates/organizations.html',
        controller: 'OrganizationsCtrl'
      }
    }
    
  })

  // 校友总会详情
  .state('tab.all-organizations', {
    url: '/all-organizations',
    views: {
      'tab-home': {
        templateUrl: 'templates/all-organizations.html',
        controller: 'OrganizationsAllCtrl',
      }
    }
  })

  // 某个校友组织详情
  .state('tab.organizationdetail', {
    url: '/organizations/:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/organization-detail.html',
        controller: 'OrganizationDetailCtrl'
      }
    }
  })

  // 同学录
  .state('tab.alumnus', {
    url: '/alumnus',
    views: {
      'tab-home': {
        templateUrl: 'templates/alumnus.html',
        controller: 'AlumnusCtrl',
      }
    }
  })

  // 产品智联
  .state('tab.shop', {
    url: '/shop',
    views: {
      'tab-home': {
        templateUrl: 'templates/shop.html',
        controller: 'ShopCtrl',
      }
    }
  })

  // 产品详情
  .state('tab.productdetail', {
    url: '/products/:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/product-detail.html',
        controller: 'ShopCtrl',
      }
    }
  })

  // 下单
  .state('tab.neworder', {
    url: '/neworder-:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/neworder.html',
        controller: 'OrdersCtrl',
      }
    }
  })

  // 俱乐部
  .state('tab.clubs', {
    url: '/clubs',
    views: {
      'tab-home': {
        templateUrl: 'templates/clubs.html',
        controller: 'ClubsCtrl',
      }
    }
  })

  // 俱乐部详情
  .state('tab.clubdetail', {
    url: '/clubs/:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/club-detail.html',
        controller: 'ClubDetailCtrl'
      }
    }
  })

  // 活动列表
  .state('tab.events', {
    url: '/events',
    views: {
      'tab-home': {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl',
      }
    }
  })

  // 活动详情
  .state('tab.eventdetail', {
    url: '/events/:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/event-detail.html',
        controller: 'EventDetailCtrl',
      }
    }
  })

  // 实习基地
  .state('tab.companies', {
    url: '/companies',
    views: {
      'tab-home': {
        templateUrl: 'templates/companies.html',
        controller: 'CompaniesCtrl',
      }
    }
  })

  // 捐赠
  .state('tab.donate', {
    url: '/donate',
    views: {
      'tab-home': {
        templateUrl: 'templates/donate.html',
        controller: 'DonateCtrl',
      }
    }
  })

  // 消息
  .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'templates/tab-messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })

  // 个人中心
  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-setting': {
        templateUrl: 'templates/tab-setting.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
