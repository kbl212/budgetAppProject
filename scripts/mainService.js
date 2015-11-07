var app = angular.module('budgetApp');


app.service('mainService', function() {
    
    this.allEnvelopes = [];

    var Envelope = function(name, amount, account) {

            
        this.name = name;
        this.amount = amount;
        this.account = account;
        return this;  //might not need this line?
        
    };


    this.envelopeNames = [];
    
this.addNewEnv = function(nameIn, amt, acct) {
	
	var isAccount = false;
        if (acct.toLowerCase() === 'checking' || acct.toLowerCase() === 'savings' || acct.toLowerCase() === 'cash') {
            isAccount = true;
        }        
    
        else {
            alert("error: choose valid account type");
        }
    
        var isNotDuplicate = true;


	if (this.envelopeNames.indexOf(nameIn) !== -1) {
            
            isNotDuplicate = false;
            alert("error: envelope already exists!");
            
        }
        
    
    if (isNotDuplicate === true && isAccount) {
        console.log(isNotDuplicate);
	    this.envelopeNames.push(nameIn);
        this.allEnvelopes.push(new Envelope(nameIn, amt, acct));
        
        
    }

};
    
    

this.sumCurrBudget = function(arr) {
    var totalSum = 0;
    for (var i = 0; i < arr.length; i++) {
        totalSum += Number(arr[i].amount);
    }
    console.log("Total budget so far: " + totalSum);
    return totalSum;
}
    
    
    
    
    
    
    
    
    
    
});

