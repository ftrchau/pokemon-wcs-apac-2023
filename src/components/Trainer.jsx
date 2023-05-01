import Pokemonlist from "./Pokemonlist";
import classes from "./Trainer.module.css";

const Trainer = (props) => {
  console.log(props);
  return (
    <li>
      <div className={classes.trainername}>
        #{props.trainerno} {props.trainerName}
      </div>
      <div>
        <Pokemonlist pokemonlist={props.pokemonlist} />
      </div>
    </li>
  );
};

export default Trainer;
