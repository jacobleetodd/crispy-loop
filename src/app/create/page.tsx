"use client";

import { createPokemon } from "@/actions/create";
import { Button, FormControl, Stack, TextField, Typography } from "@mui/material";
import { useActionState } from "react";

export default function Create() {
  const [state, action, isLoading] = useActionState(createPokemon, { error: "", name: null });

  return (
    <>
      <Typography color="primary" variant="h2">
        Create a new Pokemon!
      </Typography>
      <Typography color="primary" variant="caption">
        Psst this doesn't do anything and it always errors, but it does use action state!
      </Typography>
      <form action={action}>
        <Stack spacing={2}>
          <FormControl error={!!state.error} margin="normal">
            <TextField
              aria-labelledby="name-label"
              defaultValue={state.name}
              error={!!state.error}
              helperText={state.error && `${state.error} the name ${state.name} already exists!`}
              id="name"
              name="name"
              label="Name"
              size="small"
              variant="outlined"
            />
          </FormControl>
          <Button loading={isLoading} type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
