'use strict';

angular.module('leadlensApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


