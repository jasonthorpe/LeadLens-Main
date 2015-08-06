'use strict';

angular.module('leadlensApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
