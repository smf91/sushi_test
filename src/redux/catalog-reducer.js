
const SEND_MESSAGE = "SEND_MESSAGE-MESSAGE"

let initialState = {
    rolls : [
        {
            id: 1,
            name: 'Бора-бора',
            composition: 'Лосось, огурец, кунжут, кунжут черный',
            weight: 185,
            count: 8,
            price: 199,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43aeb0e4b04bf233126c2c?width=357'
        },
        {
            id: 2,
            name: 'Криспи креветка',
            composition: 'Креветка в темпуре, сливочный сыр, огурец, спайси соус, черный кунжут, рис, нори',
            weight: 180,
            count: 6,
            price: 209,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f64797de4b0b6befc90f5ab?width=357'
        },
        {
            id: 3,
            name: 'Саваяки',
            composition: 'Курица копченая, мясо краба, соус спайси, лист салата, белый соус, кунжут черный, рис, нори',
            weight: 200,
            count: 8,
            price: 150,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43ae86e4b04bf2331265fd?width=357'
        },
        {
            id: 4,
            name: 'Тоди',
            composition: 'Мясо краба (имитация), огурец, майонез, чука, рис, нори',
            weight: 205,
            count: 8,
            price: 105,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af21e4b04bf2331296e4?width=357'
        },
        {
            id: 5,
            name: 'Филадельфия спешл',
            composition: 'лосось, сливочный сыр, кунжут, огурец',
            weight: 195,
            count: 8,
            price: 189,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af12e4b04bf23312903d?width=357'
        },
        {
            id: 6,
            name: 'Шри-Ланка',
            composition: 'Креветка тигровая, икра масаго оранжевая, сыр сливочный, соус спайси, огурец, рис, нори',
            weight: 225,
            count: 8,
            price: 239,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af30e4b04bf233129bcb?width=357'
        },
        {
            id: 7,
            name: 'Филадельфия с креветкой',
            composition: 'креветка тигровая, лосось, огурец, сыр сливочный',
            weight: 240,
            count: 8,
            price: 299,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43af80e4b04bf23312d24f?width=357'
        },
        {
            id: 8,
            name: 'Коктейльный',
            composition: 'креветка, блин тамаго, крабовое мясо (имитация), сливочный сыр, майонез, икра масаго красная',
            weight: 260,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43b230e4b04bf23315bc3d?width=357'
        },
        {
            id: 9,
            name: 'Криспи лосось',
            composition: 'Лосось в темпуре, сливочный сыр, стружка тунца, огурец, соус унаги, рис, нори',
            weight: 190,
            count: 8,
            price: 229,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43b25ce4b04bf23315c5b7?width=357'
        },
        {
            id: 10,
            name: 'Чиз угорь',
            composition: 'угорь, сливочный сыр, соус унаги, кунжут',
            weight: 235,
            count: 8,
            price: 331,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43b034e4b04bf233137ef0?width=357'
        },
        {
            id: 11,
            name: 'DaVinchi',
            composition: 'Лосось, мясо краба 🦀 (имитация), лист салата, майонез, огурец, зеленый лук',
            weight: 245,
            count: 8,
            price: 317,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f43bd17e4b04bf2331e109c?width=357'
        },
        {
            id: 12,
            name: 'НеПариж',
            composition: 'Лосось, сливочный сыр, тамаго, огурец, спайси соус, кунжут, кунжут черный',
            weight: 250,
            count: 8,
            price: 235,
            img: 'https://xn--80adjkr6adm9b.xn--p1ai/pics/5f442f3de4b04bf2335b8c03?width=357'
        },
    ]
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEND_MESSAGE:{
        return{
            ...state,
            messageData :[...state.messageData, {text:state.newMessageText}]
        }
    }
    default:
        return state
    }
}

export const sendMessage = (somsing) => ({ type: SEND_MESSAGE, somsing })


export default catalogReducer;