import React from "react";

class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.tempo = setInterval(
            () => this.atualizar(), 1000
        );
    }

    atualizar() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.tempo);
    }

    render() {
        return (
            <div>
                <h1>Olá mundo!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Relogio;
