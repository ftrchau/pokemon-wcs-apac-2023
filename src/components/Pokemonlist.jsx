import Pokemon from "./Pokemon";
import classes from "./pokemonlist.module.css";

const Pokemonlist = (props) => {
  console.log(props);
  const pokemonliist = props.pokemonlist.map((pokemon, idx) => {
    return <Pokemon pokemon={pokemon} key={idx} />;
  });

  return <div className={classes.pokemonlistContainer}>{pokemonliist}</div>;
};

export default Pokemonlist;
