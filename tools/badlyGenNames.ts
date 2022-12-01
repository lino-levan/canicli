const original = JSON.parse(await Deno.readTextFile("./cli.json"));

const final: Record<string, unknown> = {};

for (const key of Object.keys(original)) {
  final[key] = [key];
}

await Deno.writeTextFile("./names.json", JSON.stringify(final, null, 2));
