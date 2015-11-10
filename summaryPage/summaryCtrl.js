var app = angular.module('budgetApp');



app.controller('summaryCtrl', function($scope, summaryService, makeBillsService, mainService) {
    
    $scope.getAll = function() {
    
        $scope.totalBills = makeBillsService.sendTotals();
        console.log("this is FINAL bills: " + $scope.totalBills);
        console.log("This is FINAL cash: " + $scope.totalCash);
        console.log("This is FINAL checking: " + $scope.totalChecking);
        console.log("This is FINAL savings: " + $scope.totalSavings);
    }
    
    
    
    $scope.totalCash = mainService.getCashBETA();
    $scope.totalSavings = mainService.getSavingsBETA();
    $scope.totalChecking = mainService.getCheckingBETA();
    
    
});