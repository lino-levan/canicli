import { assert } from "https://deno.land/std@0.167.0/testing/asserts.ts";

const names: Record<string, string[]> = JSON.parse(
  await Deno.readTextFile("./names.json"),
);
const clis: Record<string, {
  description: string;
  builtIn?: boolean;
  repository?: string;
}> = JSON.parse(await Deno.readTextFile("./cli.json"));

Deno.test("No CLIs have no name record", () => {
  for (const cli of Object.keys(clis)) {
    let found = false;
    for (const nameList of Object.values(names)) {
      if (nameList.includes(cli)) {
        found = true;
        break;
      }
    }
    if (!found) throw `Did not found name record for CLI '${cli}'`;
  }
});

Deno.test("No names have a CLI with no record", () => {
  for (const nameList of Object.values(names)) {
    for (const name of nameList) {
      if (!Object.hasOwn(clis, name)) {
        throw `Did not find CLI '${name}' in cli.json`;
      }
    }
  }
});

Deno.test("CLI and names are in alphabetical order", () => {
  function hasAlphabeticalKeys(obj: Record<string, unknown>) {
    const keys = Object.keys(obj);
    let cur = keys[0];
    for (let i = 1; i < keys.length; i++) {
      if (cur > keys[i]) return false;
      cur = keys[i];
    }
    return true;
  }
  assert(hasAlphabeticalKeys(names));
  assert(hasAlphabeticalKeys(clis));
});

Deno.test("CLI only has supported properties", () => {
  for (const cliDef of Object.values(clis)) {
    const validKeys = ["description", "builtIn", "repository"];
    for (const key of Object.keys(cliDef)) {
      assert(validKeys.includes(key));
    }
  }
});
