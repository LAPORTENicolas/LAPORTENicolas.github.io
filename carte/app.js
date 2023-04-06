/*
titre:
listprod: [{name,price}]

*/

const data = [
    {
        "id": 'soft',
        "title": 'Les softs',
        "listProducts": [
            {"name": 'Limonade pression', "price": '2.80'},
            {"name": 'Diabolo', "price": '2.80'},
            {"name": 'Sirop a l\'eau', "price": '2.80'},
            {"name": 'Coca Cola', "price": '2.80'},
            {"name": 'Coca Cola sans sucre', "price": '2.80'},
            {"name": 'Oasis tropical', "price": '2.80'},
            {
                "name": 'Jus de fruit granini',
                "price": '2.80',
                "description": 'Ananas, Abricot, Tomate, Raisin, Pamplemousse, Fraise, Ace, Mangue, Orange'
            },
            {"name": 'Ptit Quinquin Limonade nature', "price": '2.80'},
            {"name": 'Ptit Quinquin Violette', "price": '3'},
            {"name": 'Ptit Quinquin Pom Rhub', "price": '3'},
            {"name": 'Tonic Water TH.HENRY', "price": '3'},
            {"name": 'Tonic Water B.HENRY', "price": '3'},
            {"name": 'Tonic Water ALE HENRY', "price": '3'},
            {"name": 'Perrier', "price": '3'},
            {"name": 'San Pelligrino', "price": '3'},
            {"name": 'Villiers Monopole Plate 1L', "price": '3'},
            {"name": 'Villiers Petillante 1L', "price": '3'},
            {"name": 'Villiers Plate Exclusive 50cl', "price": '3'},
            {"name": 'Villiers Petillante Exclusive 50cl', "price": '3'},
        ]
    },
    {
        "id": 'apero',
        "title": 'Les apéritifs',
        "listProducts": [
            {"name": 'Ricard 2cl', "price": '3'},
            {"name": 'Pastis 2cl', "price": '3'},
            {"name": 'Martini Rouge 6cl', "price": '3'},
            {"name": 'Martini Blanc 6cl', "price": '4'},
            {"name": 'Porto Rouge', "price": '4'},
            {"name": 'Kir 12cl', "price": '4', "description": 'Mûre, Cassis, Pêche'},
            {"name": 'Kir Royale 12cl', "price": '8', "description": 'Mûre, Cassis, Pêche'},
            {"name": 'Coupe de chanpagne', "price": '7.50', "description": 'Séléction du moment: Mercier Brut'},
        ]
    },
    {
        "id": 'cocktail',
        "title": 'Les cocktails',
        "category": ['Sans alcool','Avec alcool'],
        "intro": {
            "pic": 'img/ilu/image 2.png',
            "para": 'Un cocktail changeant saisonnièrement de forme et de saveurs par les soins de nos barman.',
            "subPara": 'Ingrédient du moment: Rhum Blanc, Ananas, Pamplemouse, citron vert, grenadine'
        },
        "listProducts": [
            [
                {"name": 'Virgin Mojito', "price": '7.00', "description": 'sirop de canne, citron vert, jus de pomme, eau gazeuse, menthe'},
                {"name": 'Virgin Piña Colada', "price": '7.00', "description": 'ananas, crème coco citron vert'},
                {"name": 'Marilou', "price": '7.00', "description": 'ananas, gingembre, citron vert, tonic'},
                {"name": 'Tropico', "price": '7.00', "description": ''},
            ],
            [
                {"name": 'Margarita', "price": '8.00', "description": 'Tequila, Triple sec, Citron vert'},
                {"name": 'Daiquiri', "price": '8.00', "description": 'Rhum blanc, Sirop de suvre riche, jus de citron vert frais, Zeste de citron vert'},
                {"name": 'Espresso Martini', "price": '8.00', "description": 'Vodka, Liqueur de café, Sirop de sucre riche, Cold brew'},
                {"name": 'Cosmo', "price": '8.00', "description": 'Vodka, triple sec, Jus de cranberry, citron vert'},
                {"name": 'Mojito', "price": '8.00', "description": 'Feuille de menthe fraîche, Rhum blanc, sirop de sucre riche, citron vert, Angostura, eau pétillante'},
                {"name": 'Pina Colada', "price": '8.00', "description": 'Rhum blanc, Crème de coo, Jus d\'annas'},
                {"name": 'Cuba libre', "price": '8.00', "description": 'Rhum blanc, Cola'},
                {"name": 'Caipirinha', "price": '8.00', "description": 'Caipirinha, Sirop de sucre, citron vert'},
                {"name": 'Apérol Spritz', "price": '8.00', "description": 'Apérol, Prosecco'},
                {"name": 'Gin tonic', "price": '8.00', "description": 'Gin, tonic'},
                {"name": 'Tom collins', "price": '8.00', "description": 'Gin, citron jaune, sirop de sucre, eau pétrillante'},
                {"name": 'Américano', "price": '8.00', "description": 'Vermomouth, Campari, eau pétillante'},
                {"name": 'Moscow mule', "price": '8.00', "description": 'Vodka, Citron vert, ginger beer'},
                {"name": 'Negroni', "price": '8.00', "description": 'Gin, Vermouth rouge, Campari'},
                {"name": 'Bloody Mary', "price": '8.00', "description": 'Vodka, jus de tomate, Worcestershire, Tabasco, moulin à poivre, sel de célér, jus de citron'},
                {"name": 'Dark & Stormy', "price": '8.00', "description": 'Rhum ambré, ginger beer'},
                {"name": 'Irish coffee', "price": '8.00', "description": 'Irish Whiskey, cold brew, crème liquide sirop de sucre riche'},
                {"name": 'Cold brew ratio', "price": '8.00', "description": 'Eau froide, café moulu'},
                {"name": 'Cocktail Vincent', "price": '9.00', "description": 'Gin, Apérol, sirop de litchi, Champagne'},
                {"name": 'Cocktail du Barman', "price": '9.00', "description": 'Rhum Blanc, annas, pamplemouse, citron vert, grenadine'},
            ]
        ]
    }
]

// utility
const CreateSpacer            = type => {
    const div           = document.createElement('div')
    div.classList.add('spacer')

    const spacer        = document.createElement('div')
    if (type == 'menu') {
        spacer.classList.add('spacer-inital')
    } else {
        spacer.classList.add('spacer-line')
    }

    div.appendChild(spacer)
    return div
}

const CarrouselImg          = ['img/carrousel/buffet%20left%20side%201.png', 'img/carrousel/damn%20it%20s%20beautiful%201.png', 'img/carrousel/buffet%20left%20side%201.png', 'img/carrousel/damn%20it%20s%20beautiful%201.png', 'img/carrousel/buffet%20left%20side%201.png', 'img/carrousel/damn%20it%20s%20beautiful%201.png']

const CreateProductList     = data  => {
    for (let i in data) {
        const parent    = document.querySelector('main')
        const child     = document.createElement('section')
        child.id        = data[i].id
        child.classList.add('section-product')

        const title     = document.createElement('h2')
        title.appendChild(document.createTextNode(data[i].title))

        const list      = document.createElement('div')
        list.classList.add('list-products')

        child.appendChild(title)
        child.appendChild(CreateSpacer('menu'))
        if (data[i].intro) {
            child.appendChild(CreateProductIntro(data[i].intro))
        }

        if(data[i].category){
            for (let j in data[i].category) {
                const title = document.createElement('h3')
                title.appendChild(document.createTextNode(data[i].category[j]))
                title.classList.add('title-cat')
                list.appendChild(title)
                for (let k in data[i].listProducts[j]) {
                    list.appendChild(CreateOneProduct(data[i].listProducts[j][k]))
                }
            }
        } else {
            for (let j in data[i].listProducts) {
                list.appendChild(CreateOneProduct(data[i].listProducts[j]))
            }
        }

        child.appendChild(list)
        parent.appendChild(child)
    }
}

const CreateProductIntro    = data => {
    const container         = document.createElement('div')
    container.style.display = 'flex'
    container.style.width   = '90%'
    container.style.justifyContent = 'space-between'
    container.style.color   = 'white'
    container.style.margin  = '0 auto'

    const picture           = document.createElement('img')
    picture.src             = data.pic
    picture.style.margin    = 'auto'
    picture.style.width     = '100px'
    picture.style.height    = '100%'
    picture.style.flex      = '1'

    const para              = document.createElement('p')
    para.appendChild(document.createTextNode(data.para))
    para.style.margin       = '13px 0 10px 0'
    para.style.fontSize     = '1.7em'

    container.appendChild(picture)

    const textCnt           = document.createElement('div')
    textCnt.style.flex      = '4'
    textCnt.style.margin       = '0 0 0 52px'
    textCnt.appendChild(para)

    console.log(data)
    if (data.subPara) {
        const subPara       = document.createElement('p')
        subPara.appendChild(document.createTextNode(data.subPara))
        textCnt.appendChild(subPara)
    }
    container.appendChild(textCnt)

    return container
}


const CreateOneProduct      = data  => {
    const product   = document.createElement('div')
    product.classList.add('productCnt')

    const name      = document.createElement('p')
    name.appendChild(document.createTextNode(data.name))
    name.classList.add('name')

    const price     = document.createElement('p')
    price.appendChild(document.createTextNode(data.price + '€'))
    price.classList.add('price')


    if (data.description) {
        const description = document.createElement('span')
        description.appendChild(document.createTextNode(data.description))
        product.appendChild(description)

        const productAlt    = document.createElement('div')
        productAlt.classList.add('product')

        productAlt.appendChild(name)
        productAlt.appendChild(price)
        product.appendChild(productAlt)
        product.appendChild(description)
    } else {
        product.classList.add('product')
        product.classList.add('productMarge')
        product.appendChild(name)
        product.appendChild(price)
    }

    return product
}

CreateProductList(data)