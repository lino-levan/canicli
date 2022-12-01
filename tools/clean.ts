async function alphabetizeJSON(file: string) {
  const original = await Deno.readTextFile(file);
  const parsed = JSON.parse(original);
  const final: Record<string, Record<string, unknown>> = {};

  for (const key of Object.keys(parsed).sort()) {
    final[key] = parsed[key];

    // this adds builtIn automatically to cli without repository attached
    if (!Object.hasOwn(final[key], "repository")) {
      final[key].builtIn = true;
    }
  }

  await Deno.writeTextFile(file, JSON.stringify(final, null, 2));
}

await alphabetizeJSON("./cli.json");
await alphabetizeJSON("./names.json");
