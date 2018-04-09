import React from 'react';
import * as actions from '../actions';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        let store = this.props.store;
        this.state = store.getState();
    }

    componentDidMount() {
        let store = this.props.store;
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    valida(v) {
        let store = this.props.store;
        if (isNaN(v)) {
            store.dispatch(
                actions.actionErro("valor inválido")
            );
            return false;
        }
        if (v <= 0) {
            store.dispatch(
                actions.actionErro("valor da transacao <= 0")
            );
            return false;
        }
        return true;
    }

    onChangeValorTransacao(e) {
        e.preventDefault();
        let store = this.props.store;
        let v = parseFloat(e.target.value);
        if (!this.valida(v)) {
            return;
        }
        store.dispatch(
            actions.setValorTransacao(v)
        );
    }

    onCreditar(e) {
        e.preventDefault();
        let store = this.props.store;
        let v = this.state.valorTransacao;
        if (!this.valida(v)) {
            return;
        }
        store.dispatch(
            actions.actionCreditar(v)
        );
    }

    onDebitar(e) {
        e.preventDefault();
        let store = this.props.store;
        let v = this.state.valorTransacao;
        if (!this.valida(v)) {
            return;
        }
        store.dispatch(
            actions.actionDebitar(v)
        );
    }

    render() {

        return (
            <fieldset>
                <legend>Exemplo</legend>
                <input type="number"
                    value={this.state.valorTransacao === 0 ? "" : this.state.valorTransacao}
                    onChange={(e) => this.onChangeValorTransacao(e)}
                />

                <button onClick={(e) => this.onCreditar(e)}>
                    CREDITAR
                </button>

                <button onClick={(e) => this.onDebitar(e)}>
                    DEBITAR
                </button>
                <div>
                    <strong>Saldo:</strong> {this.state.saldo}
                </div>
                <div>
                    {this.state.erro}
                </div>
            </fieldset>
        );
    }
}