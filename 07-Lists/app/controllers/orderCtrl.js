angular
    .module('pizzaApp')
    .controller('OrderCtrl', [
        '$scope',
        'cartService',
        function ($scope, cartService) {
            $scope.pizzas = [{
                "id": 1,
                "name": "Pizza Vegetaria",
                "price": 5.99,
                "description": "Eine 1a Pizza - ohne Fleisch, okay - aber es gibt Menschen, die das mögen."
            }, {
                "id": 2,
                "name": "Pizza Salami",
                "price": 10.99,
                "description": "Mit herzhafter Eselsalami, aus ökologischem Anbau und nur künstlichen Aromen!"
            }, {
                "id": 3,
                "name": "Pizza Thunfisch",
                "price": 7.99,
                "description": "Lecker Fisch! Delfine im Netz -> Das macht uns nix! Ahoi, Seemänner."
            }, {
                "id": 4,
                "name": "Aktueller Flyer",
                "price": 0,
                "description": "Das Sahnestück in unserem Angebot und das vollkommen GRATIS, GRATIS, GRATIS und auch kostenlos!"
            }];

            $scope.addToCart = function (pizza) {
                cartService.addCartItem(pizza);
            };
        }
    ]);
