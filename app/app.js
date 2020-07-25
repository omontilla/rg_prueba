var app = angular.module("app", ["ngRoute"])

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
        .when("/", {
            controller: "headerCtrl",
            templateUrl: "view/header.html"
        })

}])


//app.set('views', path.join(__dirname, '/public'));

