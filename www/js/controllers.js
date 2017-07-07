angular.module('app.controllers', [])

  .controller('loginCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicHistory, $state) {

      var PIN_LENGTH = 4;
      $scope.loginKey = {
        value: 1
      };

      $scope.loginKeyChanged = function () {
        console.log($scope.loginKey)
        if ($scope.loginKey.value.toString().length === PIN_LENGTH + 1) {
          $scope.loginKey.value = 1;

          $ionicHistory.nextViewOptions({
              disableBack: true
          });
          $state.go('accounts');


        }
      }
    }

  ])

  .controller('accountsCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, DataService) {
      $scope.accounts = DataService.getAccounts();
      console.log('ACCOUNTS:', $scope.accounts);
    }
  ])

  .controller('transactionCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, DataService) {
      $scope.accountId = $stateParams.accountId;
      var populateTransactions = function () {
        return DataService.getTransactionsByAccount(parseInt($scope.accountId)).$loaded().then(function (response) {
          $scope.transactions = response;
          angular.forEach($scope.transactions, function (transaction) {
            transaction.shopData = DataService.getShopsById(transaction.shop);
            console.log(transaction);
          });
        });
      };

      $onInit = function () {
        populateTransactions();
      }

      $onInit();
    }
  ])

  .controller('settingsCtrl', ['$scope', '$stateParams', 'DataService',
    function ($scope, $stateParams, DataService) {
      $scope.shops = DataService.getShops();

      $scope.account = DataService.getAccountsById($stateParams.accountId);

      $scope.changeAllowance = function (obj) {
        var update = {};
        update['shops/' + obj.$id + "/allowed"] = obj.allowed;
        firebase.database().ref().update(update);
      };

      $scope.changeAccountStatus = function (accountId, bool) {
        var len = $scope.shops.length;
        var update = {};

        update['accounts/' + accountId + '/enabled'] = bool;
        for (var i = 1; i <= len; i++) {
          update['shops/' + i + "/allowed"] = bool;
        }

        firebase.database().ref().update(update);
      };

      console.log('SHOPS:', $scope.shops);
    }
  ])
