// scope: テンプレートに公開する プロパティやメソッドを定義するオブジェクト
// controller: scopeをセットアップする関数
var MyController = function ($scope) {
  $scope.count = 0;
  $scope.double = function ($event) {
    console.log($event)
    $scope.count = $scope.count * 2;
  };
};
var appModule = angular.module('app', []);
appModule.controller('myController', MyController);
