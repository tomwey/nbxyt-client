angular.module('xiaoyoutong.controllers', [])

// 首页
.controller('HomeCtrl', function($scope, sectionFactory, $ionicSlideBoxDelegate, DataService) {

  var _this = this;
  
  this.loadData = function() {
    DataService.get('/banners', null).then(function(result) {
      // console.log(result.data.data);
      $scope.banners = result.data.data;
    
      $ionicSlideBoxDelegate.$getByHandle('slideimgs').update();
      $ionicSlideBoxDelegate.$getByHandle('slideimgs').loop(true);
      //
      // $ionicSlideBoxDelegate.$getByHandle('slideimgs').next();
    
    }, function(error) {
      console.log(error)
    }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
  
  this.loadData();
  
  $scope.doRefresh = function() {
    _this.loadData();
  };

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
    
    $scope.isShowDonates = $scope.donatesInfo.donates != undefined;
    $scope.isShowReports = $scope.donatesInfo.reports != undefined;
    $scope.isShowThanks = $scope.donatesInfo.thanks != undefined;

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
.controller('DonatesCtrl', function($scope, $state, DataService, $ionicLoading) {
  
  $ionicLoading.show();
  
  DataService.get('/donates', null).then(function(result){
    $scope.donates = result.data.data;
  }, function(err) {
    console.log(err);
  }).finally(function() {
    $ionicLoading.hide();
  });
})

// 捐赠文章列表
.controller('ArticlesCtrl', function($scope, $stateParams, DataService, $ionicLoading) {
  
  var _this = this;
  
  $scope.currentPage = 1;
  $scope.pageSize    = 8;
  $scope.noMoreItemsAvailable = true;
  $scope.totalPage   = 1;
  
  this.loadData = function(page, size) {
    console.log('loading page: ' + page);
    $ionicLoading.show();
    DataService.get('/articles/type' + parseInt($stateParams.id), { page: page, size: size }).then(function(result) {
      var articleInfo = result.data.data;
      
      if (page == 1) {
        $scope.articleInfo = articleInfo;
        $scope.totalPage   = ( articleInfo.total + $scope.pageSize - 1 ) / $scope.pageSize;
      } else {
        var data = $scope.articleInfo.data;
        $scope.articleInfo.data = data.concat(articleInfo.data);
      }
      
      // 检查是否有更多数据
      if (page < $scope.totalPage) {
        $scope.noMoreItemsAvailable = false;
      } else {
        $scope.noMoreItemsAvailable = true;
      }
      
    }, function(err) {
      console.log(err);
    }).finally(function(){
      $ionicLoading.hide();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  
  this.loadData($scope.currentPage, $scope.pageSize);
  
  $scope.loadMore = function() {
    if ($scope.currentPage < $scope.totalPage) {
      $scope.currentPage ++;
      _this.loadData($scope.currentPage, $scope.pageSize);
    }
  };
})

// 捐赠详情
.controller('DonateDetailCtrl', function($scope, $stateParams, DataService, $ionicLoading) {
  $ionicLoading.show();
  $scope.donate = DataService.get('/donates/' + $stateParams.id, null).then(function(result){
    $scope.donate = result.data.data;
  },function(error){
    console.log(error);
  }).finally(function() {
    $ionicLoading.hide();
  });
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
.controller('DonateHelpCtrl', function($scope, $state, DataService, $ionicLoading, $stateParams) {
  
  $ionicLoading.show();
  
  $scope.page = DataService.get('/pages/donate-help', null).then(function(response){
    $scope.page = response.data.data;
  },function(err) {
    console.log(err);
  }).finally(function() {
    $ionicLoading.hide();
  });

  $scope.gotoApply = function() {
    $state.go('tab.donate-apply');
  };
})

// 捐赠申请
.controller('DonateApplyCtrl', function($scope, DataService, $ionicLoading, $cordovaToast) {
  $scope.donate_apply = { content: '', contact: '' };
  
  $scope.commitApply = function() {
    
    var content = $scope.donate_apply.content;
    if (content.trim() === '') {
      alert('内容必填');
      return;
    }
    
    var author = $scope.donate_apply.contact;
    if (author.trim() === '') {
      alert('联系方式必填');
      return;
    }
    
    $ionicLoading.show();
    DataService.post('/donates/apply', $scope.donate_apply).then(function(response) {
      console.log(response.data);
      $scope.donate_apply = { content: '', contact: '' };
    }, function(err) {
      console.log(err);
    }).finally(function() {
      $ionicLoading.hide();
    });
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
