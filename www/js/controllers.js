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
      // create a reference to our Firebase database
      // var ref = firebase.database().ref().child("accounts");
      // $scope.accounts = $firebaseArray(ref);
      // console.log('ACCOUNTS:', $scope.accounts);
    }
  ])

  .controller('transactionCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, DataService) {
      // create a reference to our Firebase database
      // var ref = firebase.database().ref().child("transactions");
      // $scope.transactions = $firebaseArray(ref);
      // console.log('TRANSACTIONS:', $scope.transactions);

      $scope.transactions = DataService.getTransactionsBtAccount(1);
      $scope.shop = DataService.getShopsById(1);

      console.log('TRANSACTIONS:', $scope.transactions);
      console.log('SHOP:', $scope.shop);
    }
  ])

  .controller('settingsCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, $firebaseArray) {
      // create a reference to our Firebase database
      // var ref = firebase.database().ref().child("shops");
      // $scope.shops = $firebaseArray(ref);
      // console.log('SHOPS:', $scope.shops);

    }
  ])
