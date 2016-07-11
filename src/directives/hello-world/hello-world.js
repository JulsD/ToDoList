/**
 * Created by Julia on 11.07.2016.
 */
module.exports = function(ngModule){
    ngModule.directive('helloWorld', helloWorldFn);
   function helloWorldFn(){
       return {
           restrict: 'E',
           scope: {},
           template: require('./hello-world.html'),
           controllerAs: 'vm',
           controller: function(){
               var vm = this;

               vm.greeting = "Hello World";
           }
       }
   }
};