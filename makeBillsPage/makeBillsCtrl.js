var app = angular.module('budgetApp');


app.controller('makeBillsCtrl', function($scope, mainService, makeBillsService) {
    
    $scope.cashTotal = mainService.getCashBETA();    
    
    $scope.allEnvs = mainService.allEnvelopes;
    
    $scope.allCashEnvelopes = makeBillsService.getCashEnvs($scope.allEnvs);
    
    $scope.billOptions = makeBillsService.allBillOptions;
    
    $scope.numBills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    
    
 
    $scope.grabTotals = function() {
        
        var hundredBills = 0;
        var fiftyBills = 0;
        var twentyBills = 0;
        var tenBills = 0;
        var fiveBills = 0;
        var oneBills = 0;
        var totalzArray = [];
        
        for (var i = 0; i < $scope.allCashEnvelopes.length; i++) {
            
            hundredBills += Number($scope.allCashEnvelopes[i].hundreds);
            fiftyBills += Number($scope.allCashEnvelopes[i].fifties);
            twentyBills += Number($scope.allCashEnvelopes[i].twenties);
            tenBills += Number($scope.allCashEnvelopes[i].tens);
            fiveBills += Number($scope.allCashEnvelopes[i].fives);
            oneBills += Number($scope.allCashEnvelopes[i].ones);
            
        }
        totalzArray.push(hundredBills,fiftyBills,twentyBills,tenBills,fiveBills,oneBills);
        console.log(totalzArray);
        makeBillsService.grabTotals(totalzArray);
    }
    
    
    $scope.totalBillsArr = $scope.grabTotals();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   /* $scope.amountLeft = function() {
        console.log("return val: " + makeBillsService.calcAmountLeft($scope.hundreds, $scope.fifties, $scope.twenties, $scope.tens, $scope.fives, $scope.ones));
       return makeBillsService.calcAmountLeft($scope.hundreds, $scope.fifties, $scope.twenties, $scope.tens, $scope.fives, $scope.ones);
    }*/
    
});