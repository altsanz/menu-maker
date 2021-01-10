var Units;
(function (Units) {
    Units["pieces"] = "piezas";
    Units["gr"] = "gr";
})(Units || (Units = {}));
const receipts = [{
        "name": "Potaje de Garbanzos",
        "ingredients": [
            {
                ingredientsId: 1,
                quantity: {
                    value: 500,
                    unit: Units.gr
                }
            },
            {
                ingredientsId: 2,
                quantity: {
                    value: 2,
                    unit: Units.pieces
                }
            },
            {
                ingredientsId: 3,
                quantity: {
                    value: 7,
                    unit: Units.pieces
                }
            },
            {
                ingredientsId: 4,
                quantity: {
                    value: 4,
                    unit: Units.pieces
                }
            },
            {
                ingredientsId: 5,
                quantity: {
                    value: 1,
                    unit: Units.pieces
                }
            },
            {
                ingredientsId: 6,
                quantity: {
                    value: 200,
                    unit: Units.gr
                }
            }
        ],
        "link": "https://recetasderechupete.com/potaje-garbanzos-verduras/18346/",
        "pax": 6
    }];
const ingredients = [{
        id: 1,
        name: "garbanzos"
    }, {
        id: 2,
        name: "cebolla"
    }, {
        id: 3,
        name: "dientes de ajo"
    }, {
        id: 4,
        name: "zanahoria"
    }, {
        id: 5,
        name: "puerro"
    }, {
        id: 6,
        name: "judias verdes"
    }
];

module.exports = () => {
    return {
        receipts,
        ingredients
    };
}
