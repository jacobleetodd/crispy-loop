import { Pokemon, PokemonResponse } from "@/queries/pokemon";

export const isPokemonResponse = (pokemon?: Pokemon | PokemonResponse | null): pokemon is PokemonResponse =>
  pokemon !== null &&
  pokemon !== undefined &&
  "count" in pokemon &&
  "next" in pokemon &&
  "previous" in pokemon &&
  "results" in pokemon;

export const isPokemon = (pokemon?: Pokemon | PokemonResponse | null): pokemon is Pokemon =>
  pokemon !== null &&
  pokemon !== undefined &&
  "abilities" in pokemon &&
  "base_experience" in pokemon &&
  "cries" in pokemon &&
  "forms" in pokemon &&
  "game_indices" in pokemon &&
  "height" in pokemon &&
  "held_items" in pokemon &&
  "id" in pokemon &&
  "is_default" in pokemon &&
  "location_area_encounters" in pokemon &&
  "moves" in pokemon &&
  "name" in pokemon &&
  "order" in pokemon &&
  "past_abilities" in pokemon &&
  "past_types" in pokemon &&
  "species" in pokemon &&
  "sprites" in pokemon &&
  "stats" in pokemon &&
  "types" in pokemon &&
  "weight" in pokemon;
