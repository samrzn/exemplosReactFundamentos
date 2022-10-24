import React from "react";
import Welcome from "./welcome";

function LoginBtn(props) {
    return (
        <button onClick={props.onClick}>
            Entrar
        </button>
    );
}

function LogoutBtn(props) {
    return (
        <button onClick={props.onClick}>
            Sair
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { logado: this.props.logado };

        // ligação dos tratadores de eventos necessita de binding.
        this.treatClickLogin = this.treatClickLogin.bind(this);
        this.treatClickLogout = this.treatClickLogout.bind(this);
    }

    treatClickLogin() {
        this.setState({ logado: true });
    }

    treatClickLogout() {
        this.setState({ logado: false });
    }

    // renderização (mudança de estado) acontece apenas quando uma das condições é atendidas.
    render() {
        const logado = this.state.logado;
        let button;
        if (logado) /*renderização condicional*/ {
            button = <LogoutBtn onClick={this.treatClickLogout} />;
        } else {
            button = <LoginBtn onClick={this.treatClickLogin} />;
        }

        return (
            <div>
                <Welcome logado={logado} />
                {button}
                <hr />
                {logado && <LogoutBtn onClick={this.treatClickLogout} /*renderização condicional inline*/ />}
                {!logado && <LoginBtn onClick={this.treatClickLogin} /*renderização condicional inline*/ />}
            </div>
        );
    }

}

export default LoginControl;