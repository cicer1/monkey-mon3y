angular.module('app.controllers', [])

  .controller('loginCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $location) {

      var PIN_LENGTH = 4;
      $scope.loginKey = {value: 1};

      $scope.loginKeyChanged = function() {
        if ($scope.loginKey.value.toString().length === PIN_LENGTH+1) {
          $location.path('accounts');
          $scope.loginKey.value = 1;
        }
      }
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
