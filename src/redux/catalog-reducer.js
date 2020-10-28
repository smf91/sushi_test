

let initialState = {
    food : [
        {
            id: 1,
            type: 'roll',
            name: 'Бора-бора',
            composition: 'Лосось, огурец, кунжут, кунжут черный',
            weight: 185,
            count: 8,
            price: 199,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43aeb0e4b04bf233126c2c?width=357'
        },
        {
            id: 2,
            type: 'roll',
            name: 'Криспи креветка',
            composition: 'Креветка в темпуре, сливочный сыр, огурец, спайси соус, черный кунжут, рис, нори',
            weight: 180,
            count: 6,
            price: 209,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f64797de4b0b6befc90f5ab?width=357'
        },
        {
            id: 3,
            type: 'roll',
            name: 'Саваяки',
            composition: 'Курица копченая, мясо краба, соус спайси, лист салата, белый соус, кунжут черный, рис, нори',
            weight: 200,
            count: 8,
            price: 150,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43ae86e4b04bf2331265fd?width=357'
        },
        {
            id: 4,
            type: 'roll',
            name: 'Тоди',
            composition: 'Мясо краба (имитация), огурец, майонез, чука, рис, нори',
            weight: 205,
            count: 8,
            price: 105,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af21e4b04bf2331296e4?width=357'
        },
        {
            id: 5,
            type: 'roll',
            name: 'Филадельфия спешл',
            composition: 'лосось, сливочный сыр, кунжут, огурец',
            weight: 195,
            count: 8,
            price: 189,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af12e4b04bf23312903d?width=357'
        },
        {
            id: 6,
            type: 'roll',
            name: 'Шри-Ланка',
            composition: 'Креветка тигровая, икра масаго оранжевая, сыр сливочный, соус спайси, огурец, рис, нори',
            weight: 225,
            count: 8,
            price: 239,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af30e4b04bf233129bcb?width=357'
        },
        {
            id: 7,
            type: 'roll',
            name: 'Филадельфия с креветкой',
            composition: 'креветка тигровая, лосось, огурец, сыр сливочный',
            weight: 240,
            count: 8,
            price: 299,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af80e4b04bf23312d24f?width=357'
        },
        {
            id: 8,
            type: 'roll',
            name: 'Коктейльный',
            composition: 'креветка, блин тамаго, крабовое мясо (имитация), сливочный сыр, майонез, икра масаго красная',
            weight: 260,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43b230e4b04bf23315bc3d?width=357'
        },
        {
            id: 9,
            type: 'roll',
            name: 'Криспи лосось',
            composition: 'Лосось в темпуре, сливочный сыр, стружка тунца, огурец, соус унаги, рис, нори',
            weight: 190,
            count: 8,
            price: 229,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43b25ce4b04bf23315c5b7?width=357'
        },
        {
            id: 10,
            type: 'roll',
            name: 'Чиз угорь',
            composition: 'угорь, сливочный сыр, соус унаги, кунжут',
            weight: 235,
            count: 8,
            price: 331,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43b034e4b04bf233137ef0?width=357'
        },
        {
            id: 11,
            type: 'roll',
            name: 'DaVinchi',
            composition: 'Лосось, мясо краба 🦀 (имитация), лист салата, майонез, огурец, зеленый лук',
            weight: 245,
            count: 8,
            price: 317,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43bd17e4b04bf2331e109c?width=357'
        },
        {
            id: 12,
            type: 'roll',
            name: 'НеПариж',
            composition: 'Лосось, сливочный сыр, тамаго, огурец, спайси соус, кунжут, кунжут черный',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f442f3de4b04bf2335b8c03?width=357'
        },
        {
            id: 13,
            type: 'wok',
            name: '1aa',
            composition: 'bd qchdcjhd jch dwjqcbd jvhw  j',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f7c603de4b010b7bcdcf647?width=300'
        },
        {
            id: 14,
            type: 'wok',
            name: 'evevevevev',
            composition: 'kpm   knkv    jnjnv   j',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f7c606fe4b010b7bce1a749?width=300'
        },
        {
            id: 15,
            type: 'wok',
            name: 'nwc  jkvj',
            composition: 'hjbbhwehbvhe  bhbhrqiblqbirvbuiuv',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f7c606fe4b010b7bce1a749?width=300'
        },
        {
            id: 16,
            type: 'set',
            name: 'adsfafdvdvdv',
            composition: 'vq    rbvrbqrfqrfqwrf',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f633916e4b00367246282ab?width=300'
        },
        {
            id: 17,
            type: 'set',
            name: 'fef  efe f',
            composition: 'jl    wfjehbfkjh  ebjhe',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f633916e4b00367246282ab?width=300'
        },
        {
            id: 18,
            type: 'set',
            name: 'ewdCDWCGGG',
            composition: 'VQRFVRFERAqrfrfrefr gqr',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f633916e4b00367246282ab?width=300'
        },
        {
            id: 19,
            type: 'friedroll',
            name: 'qvwfeweee',
            composition: 'qfrvgergvfver',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f442a58e4b04bf2335b53ca?width=300'
        },
        {
            id: 20,
            type: 'friedroll',
            name: 'jjqwekfnwen',
            composition: '3e3f3f3f3f3f',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f442a58e4b04bf2335b53ca?width=300'
        },
        {
            id: 21,
            type: 'sushi',
            name: 'vfvvfvf',
            composition: 'vaefvfvv vqev qve fvqe',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/583e61bce4b0cb96763a0ff4?width=300'
        },
        {
            id: 22,
            type: 'sushi',
            name: 'bgbgbg',
            composition: 'vafvfv vq vq rvrvtgtgt',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/583e61bce4b0cb96763a0ff4?width=300'
        },
        {
            id: 23,
            type: 'bakedrolls',
            name: 'jnqkjwernfqj',
            composition: 'ehkjbf    hjebkfj ejfqwkjef',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5d41eadce4b0dda49021c0a5?width=300'
        },
        {
            id: 24,
            type: 'bakedrolls',
            name: 'f    e2fgh555',
            composition: ' b4hjf j34bfrj qk fj',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5d41eadce4b0dda49021c0a5?width=300'
        },
        {
            id: 25,
            type: 'soup',
            name: 'kjewqnjkqw',
            composition: 'kbjc  wek ejhf j  e ',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/583eb71be4b0cb96763a156a?width=300'
        },
        {
            id: 26,
            type: 'soup',
            name: 'jnqkjhwec',
            composition: 'n j   e   ejej     e je',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/583eb71be4b0cb96763a156a?width=300'
        },
        {
            id: 27,
            type: 'tempua',
            name: '',
            composition: '',
            weight: 250,
            count: 8,
            price: 235,
            img: ''
        },
        {
            id: 28,
            type: 'tempua',
            name: 'cjedcje  ',
            composition: '',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5ecfc0b1e4b0ee5b7b9df462?width=300'
        },
        {
            id: 29,
            type: 'tempua',
            name: 'hjqjcqwjc',
            composition: 'jnvwjehfvjervj vrehvkjerh',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5ed628b6e4b0ee5b856a06f5?width=300'
        },
        {
            id: 30,
            type: 'shake',
            name: 'sdfsdfd',
            composition: 'dn acdn acn d',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f7cc672e4b010b7be0d6d71?width=300'
        },
        {
            id: 31,
            type: 'shake',
            name: 'ffffggg',
            composition: 'njqdjh jdh cjhd bjhwd',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f7cc662e4b010b7be0d68cf?width=300'
        },
    ]
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state
    }
}



export default catalogReducer;