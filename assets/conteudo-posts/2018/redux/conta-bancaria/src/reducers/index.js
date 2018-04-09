import CONSTANTS from '../constants/';

const initialState = {
    saldo: 0,
    valorTransacao: 0,
    erro: ""
};

let reducerConta = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CREDITO:
            return { ...state, erro: "", saldo: state.saldo + action.payload.valor };
        case CONSTANTS.DEBITO:
            return { ...state, erro: "", saldo: state.saldo - action.payload.valor };
        case CONSTANTS.SET_VALOR_TRANSACAO:
            return { ...state, erro: "", valorTransacao: action.payload.valorTransacao };
        case CONSTANTS.ERRO_CONTA:
            return { ...state, valorTransacao: 0, erro: action.payload.message };
        default:
            return state;
    }
};



// let reducerConta = (state = initialState, action) => {
//     let fn = {
//         [CONSTANTS.CREDITO]() {
//             return { ...state, erro: "", saldo: state.saldo + action.payload.valor };
//         },
//         [CONSTANTS.DEBITO]() {
//             return { ...state, erro: "", saldo: state.saldo - action.payload.valor };
//         },
//         [CONSTANTS.SET_VALOR_TRANSACAO]() {
//             return { ...state, erro: "", valorTransacao: action.payload.valorTransacao };
//         },
//         [CONSTANTS.ERRO_CONTA]() {
//             return { ...state, valorTransacao: 0, erro: action.payload.message };
//         }
//     };

//     if (Object.hasOwnProperty.call(fn, action.type)) {
//         return fn[action.type]();
//     }
//     return state;
// };



export default reducerConta;
