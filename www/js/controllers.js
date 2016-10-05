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
.controller('AlumnusCtrl', function($scope) {
  var alumnus = [{
    id: 1,
    avatar: 'img/mike.png',
    nickname: '昵称',
    specialty: '工业工程',
    graduation: '2006级',
  },{
    id: 2,
    avatar: 'img/ben.png',
    nickname: '昵称',
    specialty: '计算机专业',
    graduation: '2009级',
  }];
  $scope.alumnus = alumnus;
})

// 产品智联页面
.controller('ShopCtrl', function($scope) {

})

// 俱乐部列表页面
.controller('ClubsCtrl', function($scope) {

})

// 实习基地列表页面
.controller('CompaniesCtrl', function($scope) {

})

// 捐赠页面
.controller('DonateCtrl', function($scope) {

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
  $scope.settings = {
    enableFriends: true
  };
});
