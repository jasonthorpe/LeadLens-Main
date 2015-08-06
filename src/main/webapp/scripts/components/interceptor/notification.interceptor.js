 'use strict';

angular.module('leadlensApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-leadlensApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-leadlensApp-params')});
                }
                return response;
            },
        };
    });