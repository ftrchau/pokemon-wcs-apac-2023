import { useState, useEffect } from "react";
import classes from "./Pokemon.module.css";

function Pokemon(props) {
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    async function fetchPokemonImage() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`
      ); // refer to https://pokeapi.co/
      const resData = await response.json();
      setPokemonImage(resData.sprites.front_default);
    }

    fetchPokemonImage();
  }, []);

  return (
    <div className={classes.pokemonContainer}>
      {props.pokemon.shadow && (
        <img
          className={classes.shadowIcon}
          src="https://archives.bulbagarden.net/media/upload/e/e4/GO_Shadow_icon.png"
        ></img>
      )}
      {props.pokemon.purify && (
        <img
          className={classes.purifyIcon}
          src="https://archives.bulbagarden.net/media/upload/8/89/GO_Purified_icon.png"
        ></img>
      )}
      <img className={classes.pokemonImage} src={pokemonImage}></img>
    </div>
  );
}

export default Pokemon;
