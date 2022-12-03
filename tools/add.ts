const names: Record<string, string[]> = JSON.parse(
  await Deno.readTextFile("./names.json"),
);
const clis: Record<string, {
  description: string;
  builtIn?: boolean;
  repository?: string;
}> = JSON.parse(await Deno.readTextFile("./cli.json"));

const cli_name = prompt(
  "What is the name of the CLI tool you would like to add?",
);

if (!cli_name) throw "No name provided";
if (Object.hasOwn(clis, cli_name)) throw "CLI by that name is already in there";

const aliases = prompt(
  "What are the alias(es) for this tool (if multiple, separate by spaces)?",
)?.split(" ");

if (!aliases) throw "No aliases provided";

const description = prompt("What is a quick description of this tool?");

if (!description) throw "No description provided";

const built_in_prompt = prompt(
  "Is this tool built-in to any popular OS (y/n)?",
);

if (!built_in_prompt) throw "No value provided for builtIn";
if (built_in_prompt !== "y" && built_in_prompt !== "n") {
  throw "Invalid value for builtIn";
}
const built_in = built_in_prompt === "y" ? true : false;

if (built_in) {
  clis[cli_name] = {
    description,
    builtIn: true,
  };
} else {
  const repository = prompt("What is the git repository for this tool?");
  if (!repository) throw "No value provided for repository";

  clis[cli_name] = {
    description,
    repository,
  };
}

for (const alias of aliases) {
  if (Object.hasOwn(names, alias)) {
    names[alias].push(cli_name);
  } else {
    names[alias] = [cli_name];
  }
}

await Deno.writeTextFile("./names.json", JSON.stringify(names, null, 2));
await Deno.writeTextFile("./cli.json", JSON.stringify(clis, null, 2));

// clean files
const clean = Deno.run({ cmd: ["deno", "task", "clean"] });
await clean.status();

// format files
const format = Deno.run({ cmd: ["deno", "fmt"] });
await format.status();
