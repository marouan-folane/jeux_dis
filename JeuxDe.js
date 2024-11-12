import React from "react";
import De from './assets/images/Dé.PNG';
import face1 from './assets/images/face1.PNG';
import face2 from './assets/images/face2.PNG';
import face3 from './assets/images/face3.PNG';
import face4 from './assets/images/face4.PNG';
import face5 from './assets/images/face5.PNG';
import face6 from './assets/images/face6.PNG';

export default class JeuxDeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            nombreEssai: 0,
            images: [face1, face2, face3, face4, face5, face6],
            face: null,
            gane: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleClick() {
        if (!this.state.gane) { // Only allow rolling if the game hasn't been won
            const newNumber = Math.floor(Math.random() * 6) + 1;
            this.setState({
                nombre: newNumber,
                face: this.state.images[newNumber - 1]
            });

            if (newNumber !== this.props.valeur) {
                this.setState(prevState => ({
                    nombreEssai: prevState.nombreEssai + 1
                }));
            } else {
                this.setState({ gane: true });
            }
        }
    }

    reset() {
        this.setState({
            nombre: null,
            nombreEssai: 0,
            gane: false
        });
    }

    render() {
        return (
            <div>
                <img src={De} width={200} alt="Dice" />
                <br />
                Jeu de Dé <br />
                Face : {this.state.nombre} <br />
                <img src={this.state.face} alt="Dice face" />
                <br />
                Nombre d'essai : {this.state.nombreEssai} <br />
                {this.state.gane ? <p>Bravo !</p> : null}
                {this.state.gane ? <button onClick={this.reset}>Rejouer</button> : <button onClick={this.handleClick}>Jouer</button>}
            </div>
        );
    }
}


