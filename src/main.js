/**
 * Created by Julia on 05.07.2016.
 */
var angular = require('angular');
var ngModule = angular.module('app',[]);

require('./directives')(ngModule);

require('./main.scss');

import _ from 'lodash';
console.log(_.isEqual(1,2));

var obj = {
    field: 111,
    someFn () {
        console.log('someFn');
    }
};
obj.someFn();