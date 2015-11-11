var app = angular.module('budgetApp');




app.directive('timeDir', ['$interval', function($interval) {
    
    
    function link(scope, element, attrs) {
        
        var format,
            timeoutId;
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        function updateTime() {
            var d = new Date();
            var m = d.getMonth();
            var day = d.getDate();
            var year = d.getFullYear();
            element.text((monthArray[m]) + " " + day + ', ' + year);
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