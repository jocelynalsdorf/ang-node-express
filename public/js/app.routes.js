angular.module('routerRoutes', ['ngRoute'])

//configure routes
.config(function($routeProvider, $locationProvider){
  $routeProvider
  //home route
  .when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })

  //about route
  .when('/about', {
    templateUrl: 'views/pages/about.html',
    controller: 'aboutController',
    controllerAs: 'about'
  })
  
  //contact route
  .when('/contact', {
    templateUrl: 'views/pages/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  });

  //set app to have pretty urls (removes #) --you must have <base> set in head of the index.html for relative links too---
  $locationProvider.html5Mode(true);

});
