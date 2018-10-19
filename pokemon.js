/* global angular */
angular.module('app', []);

angular.module('app').controller('mainCtrl', mainCtrl);

angular.module('app').directive('pokeBox', pokeBoxDirective);
angular.module('app').directive('pokeModal', pokeModalDirective);
// .directive('myCustomer', myCustomerDirective);

function mainCtrl($scope, $http) {
    $scope.test = "Charzard";
    $scope.monsters = [
        { name: "", sprite: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
        { name: "", sprite: "" },
        { name: "Pikachu2", sprite: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
        { name: "Pikachu3", sprite: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
    ];
    $scope.empty = [
        "yes",
        "yes",
        "yes",
        "yes",
        "yes",
        "yes",
        "yes",
    ];
    $scope.currentPokemon;
    $scope.currentIndex;
    
    $scope.setIndex = function(square) {
        $scope.currentIndex = square;
        console.log("currentIndex: " + $scope.currentIndex);
    };

    $scope.onsubmit = function(form) {
        var val = $scope.pokemonName;
        var url = "https://pokeapi.co/api/v2/pokemon/" + val.toLowerCase() + "/";
        $http.get(url).then(function(response) {
            console.log(response);
            $scope.pokedata = response.data;
            $scope.currentPokemon = response.data;
        });
    };
    
    $scope.addToTeam = function(index) {
        console.log("adding to team:");
        console.log($scope.currentPokemon['name']);
        console.log($scope.currentPokemon['sprites']['front_default']);
        console.log($scope.currentIndex);
        console.log($scope.monsters[$scope.currentIndex]);
        $scope.monsters[$scope.currentIndex] = {name: $scope.currentPokemon['name'], sprite: $scope.currentPokemon['sprites']['front_default']};
        $scope.empty[$scope.currentIndex] = "no";
        console.log($scope.monsters[$scope.currentIndex]);
        console.log("empty[" + $scope.currentIndex + "]: " + $scope.empty[$scope.currentIndex]);
        $scope.clear();
    };
    
    $scope.clear = function() {
        $scope.pokedata = null;
        $scope.currentPokemon = null;
        $scope.pokemonName = "";
    }
}
