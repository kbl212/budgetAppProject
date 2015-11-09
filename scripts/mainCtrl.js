var app = angular.module('budgetApp');




app.controller('mainCtrl', function($scope, mainService) {
    
    
    var envelopeNames = [];
    $scope.envelopes = [];
    $scope.totalAmount = 0;
    $scope.keepInChecking = 0;
    $scope.keepInSavings = 0;
    $scope.toCashOut = 0;
    $scope.currTotalBal = 0;
    $scope.sumOfCurrBudget = 0;
    
    
    
//only if need to CAPITALIZE FIRST LETTER of str
function capitalFirst(str) {
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
}
    
    
    
//gets cash total from MakeEnvelopes page, to be used on getBills page.    
$scope.getCashTotal = function() {
    
    var currTotal = 0;
    
    
        for (var i = 0; i < $scope.envelopes.length; i++) {
            
            if ($scope.envelopes[i].account === "cash" || $scope.envelopes[i].account === "Cash") {
            
            currTotal += Number($scope.envelopes[i].amount);
                
        }
            
            
            
        }
    mainService.cashTotal = currTotal;
    console.log("Cash Total = " + mainService.cashTotal);
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
    console.log("Savings Total = " + mainService.savingsTotal);
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
    console.log("Checking Total = " + mainService.checkingTotal);
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
         //console.log(mainService.allEnvelopes);
         
         $scope.envelopes = mainService.allEnvelopes;
         $scope.sumOfCurrBudget = mainService.sumCurrBudget($scope.envelopes);

    }
    
});


//right heeeeeere;