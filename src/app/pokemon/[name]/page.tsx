import { PokemonSingle } from "@/components/organisms/PokemonSingle";
import { getPokemon } from "@/queries/pokemon";
import { isPokemon } from "@/type-guards/pokemon.type-guard";

interface PokemonNameProps {
  params: {
    name: string;
  };
}

export default async function PokemonName({ params }: PokemonNameProps) {
  const name = params.name;

  const pokemon = await getPokemon({ name });

  if (!isPokemon(pokemon)) {
    throw Error(`Pokemon with name ${name} not found`);
  }

  return <PokemonSingle pokemon={pokemon} />;
}
