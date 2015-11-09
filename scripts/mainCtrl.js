var app = angular.module('budgetApp');




app.controller('mainCtrl', function($scope, mainService) {
    
    
    //$scope.envelopes = [];
    //$scope.sumOfCurrBudget = 0; 
    
//gets cash total from MakeEnvelopes page, to be used on getBills page.    
$scope.getCashTotal = function() {
    
    var currTotal = 0;
    
    if ($scope.envelopes === undefined) {
        $scope.envelopes = [];
        
    }
        for (var i = 0; i < $scope.envelopes.length; i++) {
            
            if ($scope.envelopes[i].account === "cash" || $scope.envelopes[i].account === "Cash") {
            
            currTotal += Number($scope.envelopes[i].amount);
            }
        
        }
    mainService.cashTotal = currTotal;
    return mainService.cashTotal;
}



//gets SAVINGS total
$scope.getSavingsTotal = function() {
    var currTotal = 0;
    
    
        for (var i = 0; i < $scope.envelopes.length; i++) {
            
            if ($scope.envelopes[i].account === "savings" || $scope.envelopes[i].account === "Savings") {
            
            currTotal += Number($scope.envelopes[i].amount);
                
        }
            
        }
    mainService.savingsTotal = currTotal;
    return mainService.savingsTotal;
}







//get CHECKING total
$scope.getCheckingTotal = function() {
    var currTotal = 0;
    
    
        for (var i = 0; i < $scope.envelopes.length; i++) {
            
            if ($scope.envelopes[i].account === "checking" || $scope.envelopes[i].account === "Checking") {
            
            currTotal += Number($scope.envelopes[i].amount);
                
        }
            
            
            
        }
    mainService.checkingTotal = currTotal;
    return mainService.checkingTotal;
}



//adds a new envelope to $scope.envelopes with a name, amount, and account type
    $scope.addNewEnvelope = function(nameIn, amt, acct) {
       
        
        //checks to see if remaining balance will allow this new envelope amount to be added
        if (Number($scope.totes) - Number($scope.sumOfCurrBudget) - Number(amt) < 0 || $scope.totes === undefined) {
            alert('error: Not enough money left!');
            
        }
        //otherwise...calls mainService 'add envelope' function...refreshes the $scope.envelopes array...gets the total budget amount of money in the envelopes so far (sumOfCurrBudget
        else {
        
            $scope.envelopes = mainService.addNewEnv(nameIn, amt, acct);
            $scope.envelopes = mainService.allEnvelopes;
            $scope.sumOfCurrBudget = mainService.sumCurrBudget($scope.envelopes);
        }
        
    }
    
//removes an envelope
    $scope.removeEnvelope = function(index) {
         mainService.allEnvelopes.splice(index, 1);
         mainService.envelopeNames.splice(index, 1);
         
         $scope.envelopes = mainService.allEnvelopes;
         $scope.sumOfCurrBudget = mainService.sumCurrBudget($scope.envelopes);

    }
    
});



//only if need to CAPITALIZE FIRST LETTER of str
/*function capitalFirst(str) {
    var finalStr = "";
    var finalArr = str.split('');
    for (var i = 0; i < finalArr.length; i++) {
        if (i === 0) {
            
            finalStr = finalArr[0].toUpperCase();
        }
        else {
            finalStr += finalArr(i);
            
        }
        
        
    }
 return finalStr;
}*/