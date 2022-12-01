# Can I CLI?

> A unified directory for seeing if your CLI tool name has already been taken.

This project was inspired by all of those times we thought we came up with a
unique name, only to realize there was a naming conflict this whole time with
something obvious.

## Contributing

Is there a CLI tool that we're missing? Let's add it.

1. Fork the repository
2. Add the cli tool's alias to `static/names.json`. Ex: If our tool can be run
   using `cookie start`, we would add `cookie: [nameOfTool]` to
   `static/names.json`
3. Add the cli tool's metadata to `static/cli.json`. Use other tools as
   reference to what fields to put.
4. Clean the json files by running `deno task clean`.
