import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) title = <h1 className="Pokedex-winner">Winning hand!</h1>;
        else title = <h1 className="Pokedex-loser">Losing hand :(</h1>;

        return (
            <div className="Pokedex">
                {title}
                <h3>Total experience: {this.props.exp}</h3>
                <ul className="Pokedex-list">
                    {this.props.pokemon.map(dict => (
                        <li className="Pokedex-element" key={dict.id}>
                            <Pokecard
                                id={dict.id}
                                name={dict.name}
                                type={dict.type}
                                exp={dict.base_experience}
                            />
                        </li>)
                    )}
                </ul>
            </div>
        );
    }
}

export default Pokedex;