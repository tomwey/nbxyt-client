angular.module('xiaoyoutong.services', [])
.constant('baseURL', 'http://localhost:3000')
.factory('bannerFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.service('productsService', function() {
  var products = [{
    id: 1,
    sku: '309372',
    image: 'img/ben.png',
    title: '3斤装正宗蒲江猕猴桃',
    intro: '巴适得很，不信来试试',
    body: '<p style="color: red;">很不错的哦，来试试！</p>',
    price: '100',
    market_price: '199',
    exp_fee: 5,
  },
  {
    id: 2,
    sku: '319372',
    image: 'img/adam.jpg',
    title: '3斤装正宗蒲江猕猴桃',
    intro: '巴适得很，不信来试试',
    body: '<p style="color: red;">很不错的哦，来试试！</p>',
    price: '100',
    market_price: '199',
    exp_fee: 0,
  },
  {
    id: 3,
    sku: '308372',
    image: 'img/perry.png',
    title: '3斤装正宗蒲江猕猴桃',
    body: '<p style="color: red;">很不错的哦，来试试！</p>',
    intro: '巴适得很，不信来试试',
    price: '100',
    market_price: '199',
    exp_fee: 10,
  },
  {
    id: 4,
    sku: '309672',
    image: 'img/mike.png',
    title: '3斤装正宗蒲江猕猴桃',
    body: '<p style="color:red;">很不错的哦，来试试！</p>',
    intro: '巴适得很，不信来试试,巴适得很，不信来试试,巴适得很，不信来试试',
    price: '100',
    market_price: '199',
    exp_fee: 0
  }];
  this.getProducts = function() {
    return products;
  };
  this.getProduct = function(obj) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].sku === obj.sku)
        return products[i];
    }
    return null;
  };
})

.service('ordersService', function() {
  
})

.service('alumnusService', function() {
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

  this.getAlumnus = function() {
    return alumnus;
  };
})

.service('organizationService', function() {
  var organizations = [{
    id: 1,
    name: '地质校友会',
    image: 'img/ben.png',
    users_count: 3,
    intro: '这是简介一快点快点快点快点的快点快点快点快点'
  },
  {
    id: 2,
    name: '信工院校友会',
    image: 'img/adam.jpg',
    users_count: 5,
    intro: '成就梦想'
  },{
    id: 3,
    name: '林学院校友会',
    image: 'img/mike.png',
    users_count: 30,
    intro: '成就梦想'
  }];

  this.getOrganizations = function() {
    return organizations;
  };

  this.getOrganization  = function(obj_id) {
    for (var i = 0; i < organizations.length; i++) {
      if (organizations[i].id === obj_id) {
        return organizations[i];
      }
    }
    return null;
  };
})

.factory('sectionFactory', function() {
  var sections = [{
    id: 1,
    url: '#/tab/organizations',
    img: 'img/img_org.png',
  },
  {
    id: 2,
    url: '#/tab/alumnus',
    img: 'img/img_alb.png',
  },
  {
    id: 3,
    url: '#/tab/shop',
    img: 'img/img_shop.png',
  },
  {
    id: 4,
    url: '#/tab/clubs',
    img: 'img/img_club.png',
  },
  {
    id: 5,
    url: '#/tab/companies',
    img: 'img/img_comp.png',
  },
  {
    id: 6,
    url: '#/tab/donate',
    img: 'img/img_don.png',
  },
  ];
  return {
    all: function() {
      return sections;
    }
  }
})
;
