angular.module('xiaoyoutong.controllers', [])

// 首页
.controller('HomeCtrl', function($scope, sectionFactory, $ionicSlideBoxDelegate, DataService) {

  DataService.get('/banners', null).then(function(result) {
    // console.log(result.data.data);
    $scope.banners = result.data.data;
    
    $ionicSlideBoxDelegate.$getByHandle('slideimgs').update();
    $ionicSlideBoxDelegate.$getByHandle('slideimgs').loop(true);
    // $ionicSlideBoxDelegate.$getByHandle('slideimgs').start();
    //
    // $ionicSlideBoxDelegate.$getByHandle('slideimgs').next();
    
  }, function(error) {
    console.log(error)
  });

  $scope.sections = sectionFactory.all();
})

// 校友总会详情页
.controller('OrganizationsAllCtrl', function($scope) {

})

// 校友组织列表
.controller('OrganizationsCtrl', function($scope, DataService, $ionicLoading) {

  $ionicLoading.show();
  DataService.get('/organizations', null).then(function(result){
    $scope.organizations = result.data.data;
    $ionicLoading.hide();
  },function(error){
    $ionicLoading.hide();
  });
})

// 校友组织详情
.controller('OrganizationDetailCtrl', function($scope, $stateParams, DataService, $ionicLoading) {

  $ionicLoading.show();
  DataService.get('/organizations/' + $stateParams.id, null).then(function(result) {
    $scope.organization = result.data.data;

    $scope.isShowEvents = $scope.organization.latest_events.count > 0;
    $scope.isShowUsers = $scope.organization.latest_users.count > 0;

    $scope.isShowLoadMoreEvents = $scope.organization.latest_events.count >= 5;
    $scope.isShowLoadMoreUsers = $scope.organization.latest_users.count >= 5;

    $ionicLoading.hide();

  }, function(err) {
    $ionicLoading.hide();
  });

})

// 同学录页面
.controller('AlumnusCtrl', function($scope, alumnusService) {
  $scope.alumnus = alumnusService.getAlumnus();
})

// 产品智联页面
.controller('ShopCtrl', function($scope, productsService, $stateParams) {
  $scope.products = productsService.getProducts();
  $scope.product  = productsService.getProduct({sku: $stateParams.id});

  $scope.doPurchase = function(sku) {
    alert(sku);
  };
})

// 订单
.controller('OrdersCtrl', function($scope, productsService, ordersService, $stateParams) {
  $scope.product = productsService.getProduct({sku: $stateParams.id});

  var order = {};

  $scope.order = order;
  $scope.orders = [{}];
})

// 俱乐部列表页面
.controller('ClubsCtrl', function($scope, DataService, $ionicLoading) {

  $ionicLoading.show();

  $scope.clubs = DataService.get('/clubs', null).then(function(response){
    $scope.clubs = response.data.data;

    $ionicLoading.hide();
  },function(error){
    $ionicLoading.hide();
  });
})

// 俱乐部详情页
.controller('ClubDetailCtrl', function($scope, DataService, $ionicLoading, $stateParams) {
  $ionicLoading.show();
  $scope.club = DataService.get('/clubs/' + parseInt($stateParams.id), null).then(function(response){
    $scope.club = response.data.data;

    $scope.isShowEvents = $scope.club.latest_events.count > 0;
    $scope.isShowUsers = $scope.club.latest_users.count > 0;

    $scope.isShowLoadMoreEvents = $scope.club.latest_events.count >= 5;
    $scope.isShowLoadMoreUsers = $scope.club.latest_users.count >= 5;

    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  // 加入俱乐部
  $scope.doJoinClub = function(id) {
    alert(id);
  };
})

// 俱乐部章程
.controller('ClubDetailBylawsCtrl', function($scope, DataService, $ionicLoading, $stateParams) {
  console.log($stateParams);
  
  $ionicLoading.show();
  $scope.club = DataService.get('/clubs/' + parseInt($stateParams.id) + '/bylaw', null).then(function(response){
    $scope.club = response.data.data;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
})

// 活动列表页
.controller('EventsCtrl', function($scope, DataService, $ionicLoading) {
  $scope.events = DataService.get('', null).then(function() {}, function() {});
})

// 活动详情
.controller('EventDetailCtrl', function($scope, $stateParams, DataService, $ionicLoading) {
  $ionicLoading.show()
  $scope.event = DataService.get('/events/' + parseInt($stateParams.id), null).then(function(response){
    $scope.event = response.data.data;
    $ionicLoading.hide();
  },function(err) {
    console.log(err);
    $ionicLoading.hide();
  });

  // 报名参加
  $scope.doAttend = function(id) {

  };
})

// 用户列表
.controller('UsersCtrl', function($scope, usersService, $stateParams) {
  $scope.users = usersService.getUsers({type: $stateParams.type});
})

// 实习基地列表页面
.controller('CompaniesCtrl', function($scope, DataService, $ionicLoading) {
  $ionicLoading.show();

  $scope.companies = DataService.get('/bases', null).then(function(response){
    $scope.companies = response.data.data;
    $ionicLoading.hide();
  },function(err) {
    $ionicLoading.hide();
  });
})

// 基地详情
.controller('CompanyDetailCtrl', function($scope, DataService, $stateParams, $ionicLoading) {
  $ionicLoading.show();

  $scope.company = DataService.get('/bases/' + parseInt($stateParams.id), null).then(function(response) {
    $scope.company = response.data.data;
    $ionicLoading.hide();
  }, function(err) {
    $ionicLoading.hide();
  });
})

// 捐赠首页
.controller('DonateHomeCtrl', function($scope, $state, DataService, $ionicLoading) {
  $ionicLoading.show();

  $scope.donatesInfo = DataService.get('/donates/home', null).then(function(response){
    $scope.donatesInfo = response.data.data;

    $ionicLoading.hide();
  }, function(err) {
    $ionicLoading.hide();
  });

  $scope.gotoDonateHelp = function() {
    $state.go('tab.donate-help');
  };
  $scope.gotoApply = function() {
    $state.go('tab.donate-apply');
  };
})

// 捐赠页面
.controller('DonatesCtrl', function($scope, $state, donatesService) {
  $scope.donates = donatesService.getDonates();
})

// 捐赠文章列表
.controller('ArticlesCtrl', function($scope, $stateParams, donatesService) {
  $scope.articleInfo = donatesService.getArticleInfoByNode(parseInt($stateParams.id));
})

// 捐赠详情
.controller('DonateDetailCtrl', function($scope, $stateParams, donatesService) {
  $scope.donate = donatesService.getDonate(parseInt($stateParams.id));
})

// 捐赠文章详情
.controller('ArticleDetailCtrl', function($scope, $stateParams, DataService, $ionicLoading) {
  $ionicLoading.show();

  $scope.article = DataService.get('/articles/' + parseInt($stateParams.id), null).then(function(response) {
    $scope.article = response.data.data;

    $ionicLoading.hide();
  }, function(err) {
    $ionicLoading.hide();
  });
})

// 捐赠帮助
.controller('DonateHelpCtrl', function($scope, $state) {
  $scope.page = { title: '捐赠标题', body: '捐赠详情'};

  $scope.gotoApply = function() {
    $state.go('tab.donate-apply');
  };
})

// 捐赠申请
.controller('DonateApplyCtrl', function($scope) {
  $scope.donate_apply = { content: '', author: '' };
  $scope.commitApply = function() {
    alert($scope.donate_apply);
  };
})

// 消息页面
.controller('MessagesCtrl', function($scope, bannerFactory) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = bannerFactory.all();
  $scope.remove = function(chat) {
    bannerFactory.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, bannerFactory) {
  $scope.chat = bannerFactory.get($stateParams.chatId);
})

// 个人中心页面
.controller('SettingsCtrl', function($scope, $state) {
  $scope.user = {avatar: 'img/ben.png'};
  $scope.gotoOrders = function(state = '') {
    if (state.length == 0) {
      $state.go('tab.orders');
    } else {
      $state.go('tab.orders-' + state);
    }
    
  };
})

// 个人资料
.controller('UserCtrl', function($scope) {
  $scope.user = {  };
})

// 登录
.controller('LoginCtrl', function($scope,usersService) {
  $scope.user = {mobile: '', password: ''};
  $scope.doLogin = function() {
    usersService.login($scope.user);
  };
})
// 注册
.controller('SignupCtrl', function($scope, $state) {
  $scope.user = {mobile: '', password: '', code: ''};
  $scope.doRegister = function() {
    // alert('2222');
    $state.go('signup-final');
  };
  $scope.doFetchCode = function() {
    alert('123');
  };
})

// 隐藏tabs指令
.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function($scope, $el) {
            $rootScope.hideTabs = true;
            $scope.$on('$destroy', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
