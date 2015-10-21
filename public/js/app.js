//all angular code
angular.module('routerApp', ['routerRoutes'])

//create the controllers, first main controller for whole routerApp
.controller('mainController', function(){
  var vm = this;
  vm.bigMessage ="Smooth seas don't make skilled sailors";

})

.controller('homeController', function(){
  var vm = this;
  vm.message ="this is the home page";
})

.controller('aboutController', function(){
  var vm = this;
  vm.message ="I am the about page";
})

.controller('contactController', function(){
  var vm = this;
  vm.message = " Contact me";
});