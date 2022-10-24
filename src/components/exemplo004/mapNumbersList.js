function MapNumbersList(props) {
    let lista = props.lista;
    const itens_list = lista.map(
        (telefone, index) => <li key={index} title={index + 1}>{telefone}</li>
    )

    return (
        <div>
            <p>View renderizando a mesma lista do console:</p>
            <ul>{itens_list}</ul>
        </div>
    );
}

export default MapNumbersList;