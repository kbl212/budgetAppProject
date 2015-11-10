var app = angular.module('budgetApp', ['firebase', 'ui.router']);





//config stuff here
app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
        
        url: '/make-envelopes',
        templateUrl: 'makeEnvelopesPage/makeEnvelopesTmpl.html',
        controller: 'mainCtrl'
        
        })
    
    
        .state('calcBills', {
            
            url: '/calculate-bills',
            templateUrl: 'makeBillsPage/makeBillsTmpl.html',
            controller: 'makeBillsCtrl'
        })
    
        .state('summary', {
        
            url:'/summary',
            templateUrl: 'summaryPage/summaryTmpl.html',
            controller: 'summaryCtrl'
        
        })
    
    
    
    
    $urlRouterProvider
        .otherwise('/make-envelopes');

});
