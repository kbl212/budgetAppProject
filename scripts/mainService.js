var app = angular.module('budgetApp');


app.service('mainService', function() {
    
    
    //shared between several services
    this.cashTotal = -1;
    this.savingsTotal = -1;
    this.checkingTotal = -1;
    
    
    
    
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
    //checks for valid "Account/Cash" input
        if (acct.toLowerCase() === 'checking' || acct.toLowerCase() === 'savings' || acct.toLowerCase() === 'cash') {
            isAccount = true;
        }        
    
        else {
            alert("error: choose valid account type");
        }
    
    
    
    
        var isNotDuplicate = true;
    //checks for valid "Envelope name" input
	if (this.envelopeNames.indexOf(nameIn) !== -1) {
            
            isNotDuplicate = false;
            alert("error: envelope already exists!");
            
        }
    
    
    
    
        var isNum = true;
    //checks for valid "amount" input
    if (amt - amt !== 0) { //checks for Number
        isNum = false;
        alert("amount entered is not a valid number");
    }
        
    
    //if all inputs are valid, create new Env
    if (isNotDuplicate === true && isAccount && isNum) {
       // console.log(isNotDuplicate);
	    this.envelopeNames.push(nameIn);
        this.allEnvelopes.push(new Envelope(nameIn, amt, acct));
        
        
    }

};
    
    

this.sumCurrBudget = function(arr) {
    var totalSum = 0;
    for (var i = 0; i < arr.length; i++) {
        totalSum += Number(arr[i].amount);
    }
    //console.log("Total budget so far: " + totalSum);
    return totalSum;
}
    

this.getCashBETA = function() {
    
    var currTotal = 0;
    
    if (this.allEnvelopes === undefined) {
        this.allEnvelopes = [];
        
    }
        for (var i = 0; i < this.allEnvelopes.length; i++) {
            
            if (this.allEnvelopes[i].account === "cash" || this.allEnvelopes[i].account === "Cash") {
            
            currTotal += Number(this.allEnvelopes[i].amount);
                
        }
            
            
            
        }
    var cashTotal = currTotal;
    return cashTotal;
}
    


this.getSavingsBETA = function() {
    
    var currTotal = 0;
    
    if (this.allEnvelopes === undefined) {
        this.allEnvelopes = [];
        
    }
        for (var i = 0; i < this.allEnvelopes.length; i++) {
            
            if (this.allEnvelopes[i].account === "savings" || this.allEnvelopes[i].account === "Savings") {
            
            currTotal += Number(this.allEnvelopes[i].amount);
                
        }
            
            
            
        }
    var savingsTotal = currTotal;
    return savingsTotal;
}
    

this.getCheckingBETA = function() {
    
    var currTotal = 0;
    
    if (this.allEnvelopes === undefined) {
        this.allEnvelopes = [];
        
    }
        for (var i = 0; i < this.allEnvelopes.length; i++) {
            
            if (this.allEnvelopes[i].account === "checking" || this.allEnvelopes[i].account === "Checking") {
            
            currTotal += Number(this.allEnvelopes[i].amount);
                
        }
            
            
            
        }
    var checkingTotal = currTotal;
    return checkingTotal;
}
    
    
    
    
    
});

