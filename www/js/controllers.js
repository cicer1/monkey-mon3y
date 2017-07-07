angular.module('app.controllers', [])

  .controller('splashCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {


    }
  ])

  .controller('loginCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {


    }
  ])

  .controller('accountsCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, $firebaseArray) {
      $scope.accounts = DataService.getAccounts();

      console.log('ACCOUNTS:', $scope.accounts);
    }
  ])

  .controller('transactionCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, DataService) {
      $scope.transactions = DataService.getTransactionsByAccount(1);
      $scope.shop = DataService.getShopsById(1);

      console.log('TRANSACTIONS:', $scope.transactions);
      console.log('SHOP:', $scope.shop);
    }
  ])

  .controller('settingsCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, DataService) {
      $scope.shops = DataService.getShops();

      console.log('SHOPS:', $scope.shops);
    }
  ])
