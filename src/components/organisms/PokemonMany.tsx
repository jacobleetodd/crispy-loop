import { PokemonResponse } from "@/queries/pokemon";
import { Typography } from "@mui/material";
import { FC } from "react";
import { TablePokemon } from "../molecules/TablePokemon";

interface PokemonManyProps {
  page: number;
  pokemonResponse: PokemonResponse;
}

export const PokemonMany: FC<PokemonManyProps> = async ({ page, pokemonResponse }) => (
  <>
    <Typography color="primary" variant="h2">
      Discover Pokemon!
    </Typography>
    <TablePokemon initialPage={page} pokemon={pokemonResponse.results} rowCount={pokemonResponse.count} />
  </>
);
