var app = angular.module('budgetApp');


app.service('makeBillsService', function() {
    
    
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
    
    
    
});