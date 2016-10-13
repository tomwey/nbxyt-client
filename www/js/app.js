// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('xiaoyoutong', ['ionic', 'xiaoyoutong.controllers', 'xiaoyoutong.services', 'ui.router', 'base64', 'ionicLazyLoad', 'ngCordova'])

.config(['$ionicConfigProvider', function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');

  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text('');
}])

.run(function($ionicPlatform, $rootScope, $localStorage, $ionicModal) {
  // $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    // console.log('event: ' + event + 'next: ' + next + 'current: ' + current);
  // if ( $rootScope.loggedUser == null ) {
    // no logged user, we should be going to #login
    // if ( next.templateUrl == "partials/login.html" ) {
    //   // already going to #login, no redirect needed
    // } else {
    //   // not going to #login, we should redirect now
    //   $location.path( "/login" );
    // }
  // }
  // });

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $rootScope
  // }).then(function(modal) {
  //   $rootScope.modal = modal;
  // });

  // $rootScope.closeLogin = function () {
  //   $rootScope.modal.hide();
  // }

  // $rootScope.$on('$stateChangeStart', function(event, next){
  // //print here
  //   console.log('event: ' + event + ', next: ' + next.name);
  //   var currentUser = $localStorage.getObject('user', null);
  //   // console.log(currentUser);
  //   if ( currentUser == null ) {
  //     if ( next.name == 'tab.profile' ) {
  //       $rootScope.modal.show();
  //       event.presentDefault();
  //     } else {

  //     }
  //   }
  // });
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    window.onerror = function(message, url, line, col, error) {
      console.log('url: ' + url + ', line: ' + line + 'message: ' + message + ', error: ' + error);
    };
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
       
  });

  $rootScope.$on('$stateChangeStart', function(){
    console.log('Loading ...');
    $rootScope.$broadcast('loading:show');
  });

  $rootScope.$on('$stateChangeSuccess', function() {
    console.log('Done');
    $rootScope.$broadcast('loading:hide');
  })
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
    templateUrl: 'templates/tabs.html',
    controller: 'AppCtrl',
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

  // 俱乐部成员列表
  .state('tab.users', {
    url: '/users',
    views: {
      'tab-home': {
        templateUrl: 'templates/users.html',
        controller: 'UsersCtrl',
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

  // 俱乐部章程
  .state('tab.bylaws', {
    url: '/clubs/:id/bylaws',
    views: {
      'tab-home': {
        templateUrl: 'templates/bylaws.html',
        controller: 'ClubDetailBylawsCtrl',
      }
    }
  })

  // 活动列表
  .state('tab.events', {
    url: '/events/:owner_type-:owner_id',
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

  // 实习基地详情
  .state('tab.companydetail', {
    url: '/companies/:id', 
    views: {
      'tab-home': {
        templateUrl: 'templates/company-detail.html',
        controller: 'CompanyDetailCtrl',
      }
    }
  })

  // 捐赠首页
  .state('tab.donate-home', {
    url: '/donate-home',
    views: {
      'tab-home': {
        templateUrl: 'templates/donate-home.html',
        controller: 'DonateHomeCtrl',
      }
    }
  })

  // 捐赠
  .state('tab.donates', {
    url: '/donates',
    views: {
      'tab-home': {
        templateUrl: 'templates/donates.html',
        controller: 'DonatesCtrl',
      }
    }
  })

  // 捐赠详情
  .state('tab.donate-detail', {
    url: '/donates/:id', 
    views: {
      'tab-home': {
        templateUrl: 'templates/donate-detail.html',
        controller: 'DonateDetailCtrl',
      }
    }
  })

  // 捐赠文章列表
  .state('tab.articles', {
    url: '/articles/node:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/articles.html',
        controller: 'ArticlesCtrl',
      }
    }
  })

  // 捐赠文章详情
  .state('tab.article-detail', {
    url: '/articles/:id',
    views: {
      'tab-home': {
        templateUrl: 'templates/article-detail.html',
        controller: 'ArticleDetailCtrl',
      }
    }
  })

  // 捐赠帮助
  .state('tab.donate-help', {
    url: '/donate/help',
    views: {
      'tab-home': {
        templateUrl: 'templates/donate-help.html',
        controller: 'DonateHelpCtrl',
      }
    }
  })

  // 捐赠申请
  .state('tab.donate-apply', {
    url: '/donate/apply', 
    views: {
      'tab-home': {
        templateUrl: 'templates/donate-apply.html',
        controller: 'DonateApplyCtrl',
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

  // 登录
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl',
  })

  // 注册
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignupCtrl',
  })

  // 完善资料
  .state('signup-final', {
    url: '/signup-final',
    templateUrl: 'templates/signup-final.html',
    controller: 'SignupCtrl',
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
  })

  // 个人资料
  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-profile.html',
        controller: 'UserCtrl',
      }
    }
  })

  // 修改昵称
  .state('tab.profile-update-nickname', {
    url: '/update-nickname',
    views: {
      'tab-setting': {
        templateUrl: 'templates/update-nickname.html',
        controller: 'UpdateProfileCtrl'
      }
    }
  })
  
  // 修改手机号
  .state('tab.profile-update-mobile', {
    url: '/update-mobile',
    views: {
      'tab-setting': {
        templateUrl: 'templates/update-mobile.html',
        controller: 'UpdateProfileCtrl',
      }
    }
  })

  // 修改密码
  .state('tab.profile-update-password', {
    url: '/update-password',
    views: {
      'tab-setting': {
        templateUrl: 'templates/update-password.html',
        controller: 'UpdateProfileCtrl',
      }
    }
  })

  // 忘记密码
  
  
  // 加入的校友会
  .state('tab.user-organizations', {
    url: '/user-organizations',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-organizations.html',
        controller: 'UserOrganizationsCtrl',
      }
    }
  })
  
  // 校友会详情
  .state('tab.user-organization-detail', {
    url: '/user-organizations/:id',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-organization-detail.html',
        controller: 'OrganizationDetailCtrl',
      }
    }
  })
  
  // 加入的俱乐部
  .state('tab.user-clubs', {
    url: '/user-clubs',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-clubs.html',
        controller: 'UserClubsCtrl',
      }
    }
  })
  
  // 用户俱乐部详情
  .state('tab.user-club-detail', {
    url: '/user-clubs/:id',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-club-detail.html',
        controller: 'ClubDetailCtrl',
      }
    }
  })
  
  // 参加的活动
  .state('tab.user-events', {
    url: '/user-events',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-events.html',
        controller: 'UserEventsCtrl',
      }
    }
  })
  
  // 活动详情
  .state('tab.user-event-detail', {
    url: '/user-events/:id',
    views: {
      'tab-setting': {
        templateUrl: 'templates/user-event-detail.html',
        controller: 'EventDetailCtrl',
      }
    }
  })

  // 我的订单
  .state('tab.orders', {
    url: '/orders',
    views: {
      'tab-setting': {
        templateUrl: 'templates/orders.html',
        controller: 'OrdersCtrl',
      }
    }
  })
  
  // 意见反馈
  .state('tab.feedback', {
    url: '/feedback',
    views: {
      'tab-setting': {
        templateUrl: 'templates/feedback.html',
        controller: 'FeedbackCtrl',
      }
    }
  })
  // 关于我们
  .state('tab.aboutus', {
    url: '/aboutus',
    views: {
      'tab-setting': {
        templateUrl: 'templates/aboutus.html',
        controller: 'AboutusCtrl',
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
