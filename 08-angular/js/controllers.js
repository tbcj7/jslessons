var usersController = angular.module('usersController', []);

usersController.controller('ListController', ['$scope','$http', function($scope, $http) {
    $http.get('js/users.json').success(function(data){
        $scope.users = data;
        $scope.usersOrder = 'none';
    });
}]);

usersController.controller('DetailsController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('js/users.json').success(function(data){
        $scope.users = data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);
