import React from "react";
import Info from "./infoClass";

class IdentificationC extends React.Component {
    render() {
        return (
            <div>
                <p>Nome: Donna</p>
                <p>Apelido: Angel</p>
                <Info titulo="Novo nome" valor="Sam" />
            </div>
        );
    }
}

export default IdentificationC;
