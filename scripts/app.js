var app = angular.module('budgetApp', ['firebase', 'ui.router']);





//config stuff here
app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
        
        url: '/',
        templateUrl: 'makeEnvelopesPage/makeEnvelopesTmpl.html',
        controller: 'makeEnvelopesCtrl'
        
        })
    
    
    $urlRouterProvider
        .otherwise('/');

    
    
    
    
    
    
    
});
