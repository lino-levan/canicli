
const original = JSON.parse(await Deno.readTextFile('./static/cli.json'))

const final: Record<string, unknown> = {}

for(const key of Object.keys(original)) {
  final[key] = [key]
}

await Deno.writeTextFile('./static/names.json', JSON.stringify(final, null, 2))
