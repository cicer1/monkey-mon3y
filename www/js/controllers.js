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
