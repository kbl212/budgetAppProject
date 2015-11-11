var app = angular.module('budgetApp');



app.controller('summaryCtrl', function($scope, makeBillsService, mainService) {
    
    $scope.getAll = function() {
    
        $scope.totalBills = makeBillsService.sendTotals();
    }

    $scope.totalCash = mainService.getCashBETA();
    $scope.totalSavings = mainService.getSavingsBETA();
    $scope.totalChecking = mainService.getCheckingBETA();
    
    
});