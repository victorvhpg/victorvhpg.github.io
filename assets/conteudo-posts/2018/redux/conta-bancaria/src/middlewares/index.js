//exemplo estrutura de um middleware
export let middlewareExemplo = ({ getState, dispatch }) => next => action => {
    //.next() passa a action para os proximos middlewares
   //ate chegar nos reducers que atualizam o state
   let result = next(action);
   //retorna o retorno da execucao dos middlewares seguintes
   //ou action caso seja o ultimo middleware em execucao
   return result;
};

//exemplo de middleware que faz
// log da acao que esta sendo executada
export let fazerLog = ({ getState, dispatch }) => next => action => {
   //pega o state antes de executar a action
   let stateAnterior = getState();
   //.next() passa a action para os proximos middlewares
   //ate chegar nos reducers que atualizam o state
   //retorna o retorno da execucao dos middlewares seguintes
   //ou action caso seja o ultimo middleware em execucao
   let result = next(action);
   //pega o state atualizado
   let stateAtual = getState();
   //aqui ja temos o state atualizados
   console.log({ stateAnterior, action, stateAtual });
   //o retorno da dispatch
   return result;
};

//exemplo de middleware usando ES5
export let fazerLogES5 = function (middlewareAPI) {
   return function (next) {
       return function (action) {
           var getState = middlewareAPI.getState, dispatch = middlewareAPI.dispatch;
           //pega o state antes de executar a action
           var stateAnterior = getState();
           //passa para os proximos middlewares
           //ate chegar nos reducers que atualizam o state
           //retorna o retorno da execucao dos middlewares seguintes
           //ou action caso seja o ultimo middleware em execucao
           var result = next(action);
           //pega o state atualizado
           var stateAtual = getState();
           //aqui ja temos o state atualizados
           console.log({
               stateAnterior: stateAnterior,
               action: action,
               stateAtual: stateAtual
           });
           //o retorno da dispatch
           return result;
       }
   }
};

//coloca um delay para executar a action
//utilizando  propriedade meta da action
//let fnCancelar = store.dispatch({type: 'TESTE_DELAY', meta: {delay: 2000}});
export let colocarDelay = ({ getState, dispatch }) => next => action => {
   if (action.meta && action.meta.delay) {
       let timerId = window.setTimeout(() => {
           next(action);
       }, action.meta.delay);

       let fnCancel = () => {
           console.log("cancelar acao");
           window.clearTimeout(timerId);
       };
       return fnCancel;
   }
   return next(action);
};