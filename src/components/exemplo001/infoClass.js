import React from "react";

class Info extends React.Component {
    render() {
        return (
            <p>{this.props.titulo}: {this.props.valor}</p>
        );
    }
}

export default Info;