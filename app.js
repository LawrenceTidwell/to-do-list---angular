var app = angular.module("thingsToDo", []); 
app.controller("myCtrl", function($scope) {
    $scope.tasks = ["Design Logo", "Build App", "Test App"];
    $scope.addTask = function () {
        $scope.errortext = "";
        if (!$scope.newTask) {return;}
        if ($scope.tasks.indexOf($scope.newTask) == -1) {
            $scope.tasks.push($scope.newTask);
        } else {
            $scope.errortext = "The item is already in your list.";
        }
			$scope.newTask = "";
    }
    $scope.removeTask = function (x) {
        $scope.errortext = "";
        $scope.tasks.splice(x, 1);
    } 
});
