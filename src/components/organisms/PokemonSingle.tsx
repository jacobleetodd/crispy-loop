import { AbilityResponse, MoveResponse, Pokemon, StatResponse, TypeResponse } from "@/queries/pokemon";
import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface PokemonSingleProps {
  pokemon: Pokemon;
}

export const PokemonSingle: FC<PokemonSingleProps> = ({ pokemon }) => {
  return (
    <Stack height="100%" spacing={2}>
      <Typography
        color="primary.main"
        textTransform="capitalize"
        variant="h1"
      >{`Learn about ${pokemon.name}`}</Typography>
      <Card>
        <CardContent>
          <Stack alignItems="start" spacing={2}>
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt={pokemon?.name}
              style={{ maxHeight: "200px", maxWidth: "200px" }}
            />
            <Typography variant="body1">{`Height: ${pokemon?.height}`}</Typography>
            <Typography variant="body1">{`Weight: ${pokemon?.weight}`}</Typography>
            <Typography variant="body1">{`Types: ${pokemon?.types.map((type: TypeResponse) => type.type.name).join(", ")}`}</Typography>
            <Typography variant="body1">{`Abilities: ${pokemon?.abilities.map((ability: AbilityResponse) => ability.ability.name).join(", ")}`}</Typography>
            <Typography variant="body1">{`Base Experience: ${pokemon?.base_experience}`}</Typography>
            <Typography variant="body1">{`Stats: ${pokemon?.stats.map((stat: StatResponse) => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}`}</Typography>
            <Stack
              alignItems="flex-start"
              direction="row"
              flexWrap="wrap"
              gap={1}
              maxHeight={150}
              sx={{ overflow: "auto" }}
            >
              {pokemon.moves.map((move: MoveResponse) => (
                <Chip key={move.move.name} label={move.move.name} variant="outlined" size="small" />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
