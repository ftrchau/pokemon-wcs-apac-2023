import TOP_TRAINERS from "./TopTrainers";
import Card from "./UI/Card";
import Trainer from "./Trainer";
import classes from "./TopTrainers.module.css";

const TopTrainerList = () => {
  const trainerList = TOP_TRAINERS.map((trainer) => {
    return (
      <Trainer
        key={trainer.trainerno}
        trainerno={trainer.trainerno}
        trainerName={trainer.trainername}
        pokemonlist={trainer.pokemonlist}
      />
    );
  });

  console.log(TOP_TRAINERS);

  return (
    <section className={classes.trainers}>
      <Card>
        <ul>{trainerList}</ul>
      </Card>
    </section>
  );
};

export default TopTrainerList;
