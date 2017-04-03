angular.module("quotesApp").controller("mainCtrl", function($scope, mainService){
    $scope.thisAppIsBroken = "This angular app is working";

    $scope.quotes = mainService.getQuotes();
    


    $scope.deleteMe = function(textToDelete){
        mainService.removeQuote(textToDelete);
    }

    $scope.addQuote = function(){
        var newQuote = {
            quote: $scope.newQuoteText,
            author: $scope.newAuthor
        }
        if(mainService.addQuote(newQuote)){
            $scope.newQuoteText = "";
            $scope.newAuthor = "";
        }
    }
});

