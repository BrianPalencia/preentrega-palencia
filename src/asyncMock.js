//import Producto from "./pages/producto"

const lista_productos = [
    {
        "id": 1,
        "title": "Gorra LA",
        "price": 49.99,
        "description": "Gorra LA plana color azul",
        "category": "gorras",
        "image": "/assets/103922829_1.webp",
        "stock": 50,
        "rating": {
            "rate": 4.9,

            "lala": 5
        }
    },
    {
        "id": 2,
        "title": "Gorra NY ",
        "price": 30,
        "description": "Gorra rosa de NY",
        "category": "gorras",
        "image": "/assets/344314241_1449582865852140_6292884540591991901_n.jpg",
        "stock": 40,
        "rating": {
            "rate": 4.1

        }
    },
    {
        "id": 3,
        "title": "Sombrero de Playa para Mujer",
        "price": 55.99,
        "description": "Sombrero de paja, playero para mujer",
        "category": "sombreros",
        "image": "/assets/421922.jpg",
        "stock": 25,
        "rating": {
            "rate": 4.7

        }
    },
    {
        "id": 4,
        "title": "Gorra Lakers",
        "price": 49.99,
        "description": "Gorra plana legra con logo de los Lakers",
        "category": "gorras",
        "image": "/assets/New-Era---Los-Angeles-Lakers-9FIFTY-Snapback-_70556867_-01_1080x_e716b769-2ed8-4197-86eb-ce08f3376e81_512x512.webp",
        "stock": 45,
        "rating": {
            "rate": 4.1

        }
    },
    {
        "id": 5,
        "title": "Gorro The North Face",
        "price": 25,
        "description": "Gorro gris marca The North Face",
        "category": "gorros",
        "image": "/assets/NF0A3FJW_DYY-0_grande.jpg",
        "stock": 15,
        "rating": {
            "rate": 4.6

        }
    }
]


export const getProductos = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(lista_productos);

        }, 500)
    })
}

export const getProductById = (idProduct) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find(prod => prod.id == idProduct))
        }, 500);

    })

}

export const getProductsByCategory = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter(prod => prod.category == category))
        }, 500);
    })

}