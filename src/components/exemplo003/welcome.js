function UserIn() {
    return <h1>Bem-vindo de volta!</h1>;
}

function Guest() {
    return <h1>Registre-se.</h1>
}

function Welcome(props) {
    const logado = props.logado;
    if (logado) {
        return <UserIn />;
    } else {
        return <Guest />;
    }
}

export default Welcome;