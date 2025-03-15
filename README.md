This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Navigation

- Navigation to the various views with the Link component.
- Global loading and error pages. I did notice that pokemon[name] doesn't pick up on loading unless there is a second loading file in the pokemon folder.

## Pokemon

- A table that displays Pokemon names with pagination.
- The current page is tracked via a query param.
- Displaying more info about each Pokemon on the table would require dependent queries and I decided that was outside the scope of this project.
- The TablePokemon component is a client component as the MUI DataGrid uses a context internally. This might not be considered best practice but alternative table implementations seemed out of scope.
- Clicking on a name will take you to a name sub route with more details on the Pokemon.

## Pokemon [name]

- Displays a picture and details about a specific Pokemon.
- Navigating back will retain the previous pagination.

## Create

- I set up a basic form and action with useActionState.
- There is a fake mutation with a timeout that always errors.
- The mutation is server side but the page is client side to take advantage of useActionState.

## Typing

- I added some basic typing to satisfy TS. I would prefer more active validation either from the API or client side using a tool like zod.

## Various

- Format on save is working (always fun to set up).
- Relative path imports are set up.
