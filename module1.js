var app = angular.module("myapp",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/gallery",{
        templateUrl:'views/gallery.html',
        controller:'galleryctr'
    }). 
    when("/menu",{
        templateUrl:'views/menu.html',
        controller:'trainctr'
    }). 
    when("/res",{
        templateUrl:'views/res.html',
        controller:'destinationctr'
    }). 
    otherwise({
        redirectTo:'index.html'
    })

}]);
app.controller("galleryctr",function($scope)
{
    $scope.pic1 = "images/1.jpg";
    $scope.pic2 = "images/2.jpg";
    $scope.pic3 = "images/3.jpg";
    $scope.pic4 = "images/4.jpg";
    $scope.pic5 = "images/5.jpg";
    $scope.pic6 = "images/6.jpg";
    $scope.pic7 = "images/7.jpg";
    $scope.pic8 = "images/8.jpg";
    $scope.pic9 = "images/9.jpg";

});

app.controller("trainctr",function($scope)
{
    $scope.trains = ["North Indian","South Indian","Rajasthan Special","Chinese","Italian","Continental"];

});
app.controller("destinationctr",function($scope)
{
    $scope.destination = [
        {name:'Thepiz',popularity:'High',bestfor:'Italian'},
        {name:'TadkaMar',popularity:'High',bestfor:'North Indian'},
        {name:'OutofBox',popularity:'Medium',bestfor:'Chinese'},
        {name:'Haldirams',popularity:'Low',bestfor:'Continental'},
        {name:'BikanerWala',popularity:'High',bestfor:'Rajasthani Food'},
        {name:'Thalaiva',popularity:'Medium',bestfor:'South Indian'}
    ]

});