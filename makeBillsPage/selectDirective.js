var app = angular.module('budgetApp');


app.directive('remainBal', function() {
    
    return {
        restrict: "ACE",
        templateUrl: 'makeEnvelopesPage/balanceDirTmpl.html'
    };
    
});