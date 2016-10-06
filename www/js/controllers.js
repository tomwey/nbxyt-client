angular.module('xiaoyoutong.controllers', [])

// 首页
.controller('HomeCtrl', function($scope, bannerFactory, sectionFactory, $ionicSlideBoxDelegate) {
  // console.log(bannerFactory.all()[0].name);
  $scope.banners = bannerFactory.all();

  $ionicSlideBoxDelegate.$getByHandle('slideimgs').update();
  $ionicSlideBoxDelegate.$getByHandle('slideimgs').loop(true);
  $ionicSlideBoxDelegate.$getByHandle('slideimgs').start();

  $ionicSlideBoxDelegate.$getByHandle('slideimgs').next();

  $scope.sections = sectionFactory.all();
})

// 校友总会详情页
.controller('OrganizationsAllCtrl', function($scope) {

})

// 校友组织列表
.controller('OrganizationsCtrl', function($scope, organizationService) {
  var organizations = organizationService.getOrganizations();
  $scope.organizations = organizations;
})

// 校友组织详情
.controller('OrganizationDetailCtrl', function($scope, $stateParams, organizationService) {
  console.log($stateParams)
  var organization = organizationService.getOrganization(parseInt($stateParams.id));
  console.log(organization);
  $scope.organization = organization;
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
})

// 俱乐部列表页面
.controller('ClubsCtrl', function($scope, clubsService) {
  $scope.clubs = clubsService.getClubs();
})

// 俱乐部详情页
.controller('ClubDetailCtrl', function($scope, clubsService, $stateParams) {
  $scope.club = clubsService.getClub(parseInt($stateParams.id));

  console.log($scope.club);

  // 加入俱乐部
  $scope.doJoinClub = function(id) {
    alert(id);
  };
})

// 活动列表页
.controller('EventsCtrl', function($scope, eventsService) {
  $scope.events = eventsService.getEvents();
})

// 活动详情
.controller('EventDetailCtrl', function($scope, $stateParams, eventsService) {
  $scope.event = eventsService.getEvent(parseInt($stateParams.id));

  // 报名参加
  $scope.doAttend = function(id) {

  };
})

// 用户列表
.controller('UsersCtrl', function($scope, usersService, $stateParams) {
  $scope.users = usersService.getUsers({type: $stateParams.type});
})

// 实习基地列表页面
.controller('CompaniesCtrl', function($scope, companiesService) {
  $scope.companies = companiesService.getCompanies();
})

// 基地详情
.controller('CompanyDetailCtrl', function($scope, companiesService, $stateParams) {
  $scope.company = companiesService.getCompany(parseInt($stateParams.id));
})

// 捐赠首页
.controller('DonateHomeCtrl', function($scope, $state, donatesService) {
  $scope.donatesInfo = donatesService.getDonatesInfo();

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
.controller('ArticleDetailCtrl', function($scope, $stateParams, donatesService) {
  $scope.article = donatesService.getArticle(parseInt($stateParams.id));
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
.controller('SettingsCtrl', function($scope) {
  $scope.user = {avatar: 'img/ben.png'};
})
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
