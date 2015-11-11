var app = angular.module('budgetApp');




app.directive('timeDir', ['$interval', function($interval) {
    
    
    function link(scope, element, attrs) {
        
        var format,
            timeoutId;
        
        function updateTime() {
            
            element.text(new Date(), format);
        }
        
        scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
        });
    
        element.on('$destroy', function() {
            
            $interval.cancel(timeoutId);
            
        });
    
        timeoutId = $interval(function() {
            
            updateTime();
            
        }, 1000);
    }
    
    
    
    return {
        
        link: link
    };
    
    
    
}]);