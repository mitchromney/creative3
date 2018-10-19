/* global angular */
angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('pokeBox', pokeBoxDirective);
// .directive('myCustomer', myCustomerDirective);

function mainCtrl($scope, $http) {
    $scope.test = "Charzard";
    $scope.monsters = [
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
        }
    
    // $scope.addNew = function(user) {
    //     if (!user.name && !user.email) {
    //         alert("Please enter either an email or a name");
    //     }
    //     else {
    //         console.log(user.name);
    //         console.log(user.email);
    //         $scope.users.push({
    //             name: user.name,
    //             email: user.email,
    //             avatarUrl: user.url
    //         });
    //         user.name = '';
    //         user.email = '';
    //         user.url = '';
    //     }
    // };
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

// function pokeBoxDirective() {
//     return {
//         scope: {
//             pokemon: '=pokemon'
//         },
//         restrict: 'E',
//         replace: 'true',
//         template: (
//             '<div class="PokeBox square-content border rounder border-shadow">' +
//             '<img class="sprite" src={{pokemon.sprite}} alt="picture of {{pokemon.name}}>' +
//             '<p>{{pokemon.name}}*</p>' +
//             '</div>'
//         ),
//     };
// }
