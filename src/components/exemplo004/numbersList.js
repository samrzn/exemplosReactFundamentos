function NumbersList(props) {
    let lista = props.lista;
    lista.forEach(telefone => {
        console.log(telefone);
    });

    return (
        <p>Verifique o console.</p>
    )
}

export default NumbersList;
