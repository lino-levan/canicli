
async function alphabetizeJSON(file: string) {
  const original = await Deno.readTextFile(file)
  const parsed = JSON.parse(original)
  const final: Record<string, unknown> = {}

  for(const key of Object.keys(parsed).sort()) {
    final[key] = parsed[key]
  }

  await Deno.writeTextFile(file, JSON.stringify(final, null, 2))
}

await alphabetizeJSON('./static/cli.json')
await alphabetizeJSON('./static/names.json')