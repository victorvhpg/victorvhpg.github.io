import CONSTANTS from '../constants';

export let actionCreditar = (valorCredito) => {
    return {
        type: CONSTANTS.CREDITO,
        payload: {
            valor: valorCredito
        }
    };
};

export let actionDebitar = (valorDebito) => {
    return {
        type: CONSTANTS.DEBITO,
        payload: {
            valor: valorDebito
        }
    };
};

export let setValorTransacao = (v) => {
    return {
        type: CONSTANTS.SET_VALOR_TRANSACAO,
        payload: {
            valorTransacao: v
        }
    };
};

export let actionErro = (descricaoErro) => {
    return {
        type: CONSTANTS.ERRO_CONTA,
        error: true,
        payload: new Error(descricaoErro)
    };
};

export let actionCreditarAsync = (valorCredito) => {
    return (dispatch) => {
        window.setTimeout(() => {
            dispatch(actionCreditar(valorCredito));
        }, 3000);
    };
};

