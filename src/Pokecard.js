import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;


class Pokecard extends Component {

    render() {
        const id = this.props.id.toString().padStart(3, '0');
        let imgSrc = `${POKE_API}${id}.png`

        return (
            <div className="Pokecard">
                <h2 className="Pokecard-name">{this.props.name}</h2>
                <div className="Pokecard-picture">
                    <img src={imgSrc} alt={`${this.props.name}.png`} />
                </div>
                <div className="Pokecard-info">
                    <span className="Pokecard-type">Type: {this.props.type}</span>
                    <span className="Pokecard-exp">EXP: {this.props.exp}</span>
                </div>
            </div>
        );
    }
}

export default Pokecard;