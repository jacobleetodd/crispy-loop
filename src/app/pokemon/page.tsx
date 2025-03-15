import { PokemonMany } from "@/components/organisms/PokemonMany";
import { getPokemon } from "@/queries/pokemon";
import { isPokemonResponse } from "@/type-guards/pokemon.type-guard";

interface SearchParams {
  page?: string;
}

export default async function Pokemon({ searchParams }: { searchParams: SearchParams }) {
  const limit = 20;
  const page = parseInt(searchParams.page ?? "0");
  const pokemonResponse = await getPokemon({ limit, offset: (page + 1) * limit });

  if (!isPokemonResponse(pokemonResponse)) {
    throw Error("Could not load the Pokemon!");
  }

  return <PokemonMany page={page} pokemonResponse={pokemonResponse} />;
}
