angular.module("triviaApp").controller("mainCtrl", function($scope, mainService){
    $scope.test = "controller is working";
    $scope.test1 = mainService.test1;

    $scope.prev = prev;
    $scope.next = next;
    var pageNum = 0;

    $scope.getData = function(){
       mainService.getData().then(function(response){
            $scope.triviaList = response;
            $scope.options = response;
       })
    };
    $scope.getData();

    // $scope.currentPage = 0;

    // $scope.prev = function(){
    //     if($scope.currentPage > 1){
    //         $scope.currentPage--;
    //         $scope.getData();
    //     }
    // };

    // $scope.next = function(){
    //     if($scope.currentPage < $scope.total_pages){
    //         $scope.currentPage++;
    //         $scope.getData();
    //     }
    // };

        function prev(pageNum){
            console.log(pageNum);
            pageNum++;
            $scope.getData(pageNum);
        }

        function next(pageNum){
            console.log(pageNum);
            if(pageNum > 0){
            pageNum--;
            $scope.getData(pageNum);
        }

    }


});