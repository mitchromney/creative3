/* global angular */
angular.module('app', []);

angular.module('app').controller('mainCtrl', mainCtrl);

angular.module('app').directive('pokeBox', pokeBoxDirective);
angular.module('app').directive('pokeModal', pokeModalDirective);
// .directive('myCustomer', myCustomerDirective);

function mainCtrl($scope, $http) {
    $scope.test = "Charzard";
    $scope.monsters = [
        { name: "Pikachu", sprite: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
        { name: "Pikachu", sprite: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
        { name: "Pikachu", sprite: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
    ];
    $scope.naomi = { name: 'Naomi', sprite: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', sprite: '123 Somewhere' };

    $scope.onsubmit = function(form) {
        var val = $scope.pokemonName;
        var url = "https://pokeapi.co/api/v2/pokemon/" + val.toLowerCase() + "/";
        $http.get(url).then(function(response) {
            console.log(response);
            $scope.pokedata = response.data;
        });
    };
    
    $scope.addToTeam = function() {
        alert("testy test");  
    };
}

function pokeBoxDirective() {
    return {
        restrict: 'E',
        scope: {
            pokemon: '='
        },
        templateUrl: 'poke-box.html'
    };
}

function pokeModalDirective() {
    return {
        restrict: 'E',
        scope: {
            index: '='
        },
        templateUrl: 'poke-modal.html'
    }
}
