/* global angular */
angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-iso.html'
        };
    });
// .directive('myCustomer', myCustomerDirective);

function mainCtrl($scope) {
    $scope.test = "Charzard";
    $scope.monsters = [
        { name: "Pikachu", address: "https://img.pokemondb.net/sprites/platinum/normal/pikachu.png" },
    ];
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
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
