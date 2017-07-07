angular.module('app.controllers', [])

  .controller('loginCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $location) {

      var PIN_LENGTH = 4;
      $scope.loginKey = { value: 1 };

      $scope.loginKeyChanged = function () {
        console.log($scope.loginKey)
        if ($scope.loginKey.value.toString().length === PIN_LENGTH + 1) {
          $location.path('accounts');
          $scope.loginKey.value = 1;
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

      var populateTransactions = function () {
        return DataService.getTransactionsByAccount(1).$loaded().then(function (response) {
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

      $scope.changeAllowance = function (obj) {
        var update = {};
        update['shops/' + obj.$id + "/allowed"] = obj.allowed;
        firebase.database().ref().update(update);
      };

      $scope.disableAccount = function () {

      };

      console.log('SHOPS:', $scope.shops);
    }
  ])