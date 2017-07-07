angular.module('app.services', [])

  .service('DataService', ['$firebaseArray', '$firebaseObject',
    function ($firebaseArray, $firebaseObject) {

      this.getTransactions = function () {
        var ref = firebase.database().ref().child("transactions");
        return $firebaseArray(ref);
      };

      this.getTransactionsByAccount = function (accountId) {
        var ref = firebase.database().ref().child("transactions")
          .orderByChild("account")
          .equalTo(accountId);
        return $firebaseArray(ref);
      };

      this.getAccounts = function () {
        var ref = firebase.database().ref().child("accounts");
        return $firebaseArray(ref);
      };

      this.getAccountsById = function (id) {
        var ref = firebase.database().ref("accounts/" + id);
        return $firebaseObject(ref);
      };

      this.getShops = function () {
        var ref = firebase.database().ref().child("shops");
        return $firebaseArray(ref);
      };

      this.getShopsById = function (id) {
        var ref = firebase.database().ref("shops/" + id);

        return $firebaseObject(ref);
      };
    }
  ]);
