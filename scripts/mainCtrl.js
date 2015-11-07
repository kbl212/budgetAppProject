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
    
    
//adds a new envelope to $scope.envelopes with a name, amount, and account type
    $scope.addNewEnvelope = function(nameIn, amt, acct) {
       

        
        
        //checks to see if remaining balance will allow this new envelope amount to be added
        if (Number($scope.totes) - Number($scope.sumOfCurrBudget) - Number(amt) < 0) {
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