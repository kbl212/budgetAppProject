var app = angular.module('budgetApp');


app.controller('makeBillsCtrl', function($scope, mainService, makeBillsService) {
    
    $scope.cashTotal = mainService.getCashBETA();    
    
    $scope.allEnvs = mainService.allEnvelopes;
    
    $scope.allCashEnvelopes = makeBillsService.getCashEnvs($scope.allEnvs);
    
    $scope.billOptions = makeBillsService.allBillOptions;
    
    $scope.numBills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    $scope.amountLeft = function() {
        console.log("return val: " + makeBillsService.calcAmountLeft($scope.hundreds, $scope.fifties, $scope.twenties, $scope.tens, $scope.fives, $scope.ones));
       return makeBillsService.calcAmountLeft($scope.hundreds, $scope.fifties, $scope.twenties, $scope.tens, $scope.fives, $scope.ones);
    }
    
});