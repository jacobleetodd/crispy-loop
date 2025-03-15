export interface EntityReference {
  name: string;
  url: string;
}

export interface TypeResponse {
  slot: number;
  type: EntityReference;
}

export interface AbilityResponse {
  ability: EntityReference;
  is_hidden: boolean;
  slot: number;
}

export interface StatResponse {
  base_stat: number;
  effort: number;
  stat: EntityReference;
}

export interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: EntityReference;
  version_group: EntityReference;
}

export interface MoveResponse {
  move: EntityReference;
  version_group_details: VersionGroupDetails[];
}

export interface GameIndicesResponse {
  game_index: number;
  version: EntityReference;
}

export interface VersionDetailsResponse {
  rarity: number;
  version: EntityReference;
}

export interface HeldItemsResponse {
  item: EntityReference;
  version_details: VersionDetailsResponse[];
}

export interface Pokemon {
  abilities: AbilityResponse[];
  base_experience: number;
  cries: { latest: string; legacy: string };
  forms: EntityReference[];
  game_indices: GameIndicesResponse[];
  height: number;
  held_items: HeldItemsResponse[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveResponse[];
  name: string;
  order: number;
  past_abilities: AbilityResponse[];
  past_types: TypeResponse[];
  species: EntityReference;
  sprites: any;
  stats: StatResponse[];
  types: TypeResponse[];
  weight: number;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: EntityReference[];
}

export interface GetPokemonParams {
  name?: string;
  offset?: number;
  limit?: number;
}

export interface TypeResponse {
  slot: number;
  type: EntityReference;
}

export interface AbilityResponse {
  ability: EntityReference;
  is_hidden: boolean;
  slot: number;
}

export interface StatResponse {
  base_stat: number;
  effort: number;
  stat: EntityReference;
}

export interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: EntityReference;
  version_group: EntityReference;
}

export interface MoveResponse {
  move: EntityReference;
  version_group_details: VersionGroupDetails[];
}

export async function getPokemon({ limit, name, offset }: GetPokemonParams): Promise<Pokemon | PokemonResponse | null> {
  try {
    const pokemonResponse = await fetch(
      name
        ? `https://pokeapi.co/api/v2/pokemon/${name}?offset=${offset ?? 20}&limit=${limit ?? 20}`
        : `https://pokeapi.co/api/v2/pokemon/?offset=${offset ?? 20}&limit=${limit ?? 20}`,
    );

    if (!pokemonResponse.ok) {
      throw new Error(`HTTP error! status: ${pokemonResponse.status}`);
    }

    const pokemonData = await pokemonResponse.json();
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return null;
  }
}
