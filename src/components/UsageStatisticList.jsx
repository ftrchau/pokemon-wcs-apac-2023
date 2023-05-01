import USAGE_POKEMON from "./useagePokemon";
import UsageStatistic from "./UsageStatistic";
import Card from "./UI/Card";

function UsageStatisticList() {
  let usage_pokemon_transform = [];
  for (var key in USAGE_POKEMON) {
    var pokemon = USAGE_POKEMON[key];
    let findIndex = usage_pokemon_transform.findIndex(
      (x) => x.Pokemon == pokemon.Pokemon
    );
    if (findIndex == -1) {
      let add_pokemon = {
        Pokemon: pokemon.Pokemon,
        chinese: pokemon.Chinese,
        normal: 0,
        shadow: 0,
        count: pokemon.count,
        percentage: pokemon.percentage,
        countnormal: 0,
        countshadow: 0,
      };

      if (pokemon.Appearance == "normal" || pokemon.Appearance == "purified") {
        add_pokemon.normal = pokemon.percentagegraph * 100;
        add_pokemon.countnormal = pokemon.count;
      }
      if (pokemon.Appearance == "shadow") {
        add_pokemon.shadow = pokemon.percentagegraph * 100;
        add_pokemon.countshadow = pokemon.count;
      }

      usage_pokemon_transform.push(add_pokemon);
    } else {
      if (pokemon.Appearance == "normal") {
        usage_pokemon_transform[findIndex].normal =
          pokemon.percentagegraph * 100;
        usage_pokemon_transform[findIndex].countnormal = pokemon.count;
      }

      if (pokemon.Appearance == "shadow") {
        usage_pokemon_transform[findIndex].shadow =
          pokemon.percentagegraph * 100;
        usage_pokemon_transform[findIndex].countshadow = pokemon.count;
      }

      usage_pokemon_transform[findIndex].percentage += pokemon.percentage;
    }
  }

  usage_pokemon_transform.sort(function (a, b) {
    return b.countnormal + b.countshadow - a.countnormal - a.countshadow;
  });

  const usageStatisticList = usage_pokemon_transform.map((pokemon) => {
    return (
      <UsageStatistic
        key={pokemon.Pokemon}
        name={pokemon.name}
        chinese={pokemon.chinese}
        normal={pokemon.normal}
        shadow={pokemon.shadow}
        count={pokemon.count}
        percentage={pokemon.percentage}
        countnormal={pokemon.countnormal}
        countshadow={pokemon.countshadow}
      />
    );
  });

  return <Card>{usageStatisticList}</Card>;
}

export default UsageStatisticList;
