var app = angular.module('budgetApp');


app.service('makeBillsService', function() {
    
    this.totalZArr = [];
    
    this.allBillOptions = [1, 5, 10, 20, 50, 100];
    
    this.getCashEnvs = function(envArr) {
        var cashArray = [];
        for (var i = 0; i < envArr.length; i++) {
            if (envArr[i].account === 'cash' || envArr[i].account === 'Cash') {
                
                cashArray.push(envArr[i]);
                
            }
        }
        return cashArray;
    }
    
    this.calcAmountLeft = function(hundreds, fifties, twenties, tens, fives, ones) {
        
        
        if (hundreds === undefined) {
            hundreds = 0;
        }
        
         if (fifties === undefined) {
            fifties = 0;
        }
        
         if (twenties === undefined) {
            twenties = 0;
        }
        
         if (tens === undefined) {
            tens = 0;
        }
        
         if (fives === undefined) {
            fives = 0;
        }
        
         if (ones === undefined) {
            ones = 0;
        }
        
        var totalUsed = hundreds * 100 + fifties * 50 + twenties * 20 + tens * 10 + fives * 5 + ones;
        
        return totalUsed;
    }
    
    
        this.grabTotals = function(arr) {
            this.totalZArr = arr;
            console.log("did it work?: " + this.totalZArr);
            return this.totalZArr;
    }
        this.sendTotals = function() {
            
            return this.totalZArr;
        }
    
    
    
});