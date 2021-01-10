export interface Receipt {
    name: string;
    ingredients: {
        ingredientsId: number;
        quantity: {
            value: number;
            unit: Units;
        }
    }[],
    link?: string,
    raciones: number
}

export interface Ingredient {
    id: number;
    name: string;
    url?: string;
}

export enum Units {
    pieces = "piezas",
    gr = "gr",
    onTaste = "al gusto",
    ml = "ml"
}

const receipts: Receipt[] = [{
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
        }, {
            ingredientsId: 7,
            quantity: {
                value: 200,
                unit: Units.gr
            }
        }, {
            ingredientsId: 8,
            quantity: {
                value: 200,
                unit: Units.gr
            }
        }, {
            ingredientsId: 9,
            quantity: {
                value: 1,
                unit: Units.pieces
            }
        },
        {
            ingredientsId: 10,
            quantity: {
                value: 1,
                unit: Units.onTaste
            }
        },
        {
            ingredientsId: 11,
            quantity: {
                value: 1,
                unit: Units.onTaste
            }
        },
        {
            ingredientsId: 12,
            quantity: {
                value: 1,
                unit: Units.onTaste
            }
        },
        {
            ingredientsId: 13,
            quantity: {
                value: 1,
                unit: Units.onTaste
            }
        },

    ],
    "link": "https://recetasderechupete.com/potaje-garbanzos-verduras/18346/",
    "raciones": 6
}, {
    name: "Tofu en salsa de Cacahuete y patatas",
    link: "https://www.instagram.com/p/CFt-Z_NnxUR/?igshid=rwc149v9bj0s",
    ingredients: [{
        ingredientsId: 14,
        quantity: {
            unit: Units.gr,
            value: 400
        }
    }, {
        ingredientsId: 15,
        quantity: {
            unit: Units.gr,
            value: 400
        }
    }, {
        ingredientsId: 16,
        quantity: {
            unit: Units.gr,
            value: 70
        }
    }, {
        ingredientsId: 2,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 4,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 17,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 18,
        quantity: {
            unit: Units.onTaste,
            value: 1
        }
    }, {
        ingredientsId: 19,
        quantity: {
            unit: Units.onTaste,
            value: 1
        }
    }, {
        ingredientsId: 13,
        quantity: {
            unit: Units.onTaste,
            value: 1
        }
    }, {
        ingredientsId: 21,
        quantity: {
            unit: Units.pieces,
            value: 4
        }
    }],
    raciones: 4
}, {
    ingredients: [{
        ingredientsId: 21,
        quantity: {
            unit: Units.pieces,
            value: 5
        }
    }, {
        ingredientsId: 5,
        quantity: {
            unit: Units.pieces,
            value: 0.5
        }
    }, {
        ingredientsId: 22,
        quantity: {
            unit: Units.ml,
            value: 400
        }
    }, {
        ingredientsId: 23,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 24,
        quantity: {
            unit: Units.pieces,
            value: 2
        }
    }
    ],
    name: "Puré de patatas y puerro",
    link: '',
    raciones: 4
}, {
    ingredients: [{
        ingredientsId: 25,
        quantity: {
            unit: Units.onTaste,
            value: 1
        }
    }],
    name: "Seitán",
    raciones: 1 // Cambiar cuando utilice las raciones
}, {
    ingredients: [{
        ingredientsId: 26,
        quantity: {
            unit: Units.gr,
            value: 100
        }
    }, {
        ingredientsId: 27,
        quantity: {
            unit: Units.gr,
            value: 400
        }
    }, {
        ingredientsId: 28,
        quantity: {
            unit: Units.gr,
            value: 400
        }
    }, {
        ingredientsId: 2,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 3,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 29,
        quantity: {
            unit: Units.onTaste,
            value: 1
        }
    }, {
        ingredientsId: 30,
        quantity: {
            unit: Units.pieces,
            value: 5
        }
    }],
    name: "Tacos de Soja Text",
    raciones: 2,
}, {
    name: "Guacamole",
    ingredients: [{
        ingredientsId: 31,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 23,
        quantity: {
            unit: Units.pieces,
            value: 2
        }
    }, {
        ingredientsId: 33,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 34,
        quantity: {
            unit: Units.pieces,
            value: 1
        }
    }, {
        ingredientsId: 35,
        quantity: {
            unit: Units.onTaste,
            value: 1
        }
    }, {
        ingredientsId: 36,
        quantity: {
            unit: Units.pieces,
            value: 0.5
        }
    }],
    raciones: 2
}, {
    ingredients: [{
        ingredientsId: 37,
        quantity: {
            unit: Units.gr,
            value: 600
        }
    }, {
        ingredientsId: 38,
        quantity: {
            unit: Units.onTaste,
            value: 1,
        }
    }, {
        ingredientsId: 39,
        quantity: {
            unit: Units.pieces,
            value: 1,
        }
    }, {
        ingredientsId: 40,
        quantity: {
            unit: Units.onTaste,
            value: 1,
        }
    }], 
    name: "Macarrones a la boloñesa",
    raciones: 4
}, {
    ingredients: [{
        ingredientsId: 6,
        quantity: {
            unit: Units.gr,
            value: 400
        }
    }, {
        ingredientsId: 21,
        quantity: {
            unit: Units.pieces,
            value: 5
        }
    }],
    name: "Judias con patatas",
    raciones: 4
}]




const ingredients: Ingredient[] = [{
    id: 1,
    name: "garbanzos"
}, {
    id: 2,
    name: "cebolla",
    url: "https://tienda.consum.es/consum/producto/-cebolla-seca-malla-tubo/p-961342#DetalleProducto"
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
}, {
    id: 7,
    name: "salsa de tomate"
}, {
    id: 8,
    name: "espinacas"
}, {
    id: 9,
    name: "hoja de laurel"
}, {
    id: 10,
    name: "sal"
}, {
    id: 11,
    name: "pimienta"
}, {
    id: 12,
    name: "perejil"
}, {
    id: 13,
    name: "AOVE"
}, {
    id: 14,
    name: "Tofu"
}, {
    id: 15,
    name: "Leche de Coco"
}, {
    id: 16,
    name: "Crema de cacahuete"
}, {
    id: 17,
    name: "brócoli"
}, {
    id: 18,
    name: "Curry en polvo"
}, {
    id: 19,
    name: "Salsa Tamari"
}, {
    id: 20,
    name: "Shiitake"
}, {
    id: 21,
    name: "Patatas"
}, {
    id: 22,
    name: "bebida de Avena"
}, {
    id: 23,
    name: "Pastilla de caldo"
}, {
    id: 24,
    name: "Manojo espárragos verdes"
}, { 
    id: 25,
    name: "Glutén de trigo"
}, {
    id: 26,
    name: "Soja Texturizada"
}, {
    id: 27,
    name: "Alubias negras"
}, {
    id: 28,
    name: "Tomate triturado"
}, {
    id: 29,
    name: "Polvo de Fajitas"
}, {
    id: 30,
    name: "Fajitas"
}, {
    id: 31,
    name: "Cebolleta"
}, {
    id: 32,
    name: "Aguacate"
}, {
    id: 33,
    name: "tomate"
}, {
    id: 34,
    name: "limón"
}, {
    id: 35,
    name: "cilantro"
}, {
    id: 36,
    name: "Bolsa de Nachos"
}, {
    id: 37,
    name: "Macarrones"
}, {
    id: 38,
    name: "Salsa de Soja"
}, {
    id: 39,
    name: "Calabacín"
}, {
    id: 40,
    name: "Queso rallado"
}
]

export const db = {
    receipts,
    ingredients
}
