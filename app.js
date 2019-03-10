// scope: テンプレートに公開する プロパティやメソッドを定義するオブジェクト
// controller: scopeをセットアップする関数
var MyController = function ($scope) {
  $scope.message = 'hello, world';
  $scope.action = function () {
    $scope.message = 'good, bye';
  };
};
var appModule = angular.module('app', []);
appModule.controller('myController', MyController);
