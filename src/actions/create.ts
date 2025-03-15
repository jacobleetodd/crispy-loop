"use server";

export async function createPokemon(
  _previousState: { error: FormDataEntryValue | null; name: FormDataEntryValue | null },
  formData: FormData,
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const name = formData.get("name");
  console.log({ name });
  return { error: "Error!", name };
}
