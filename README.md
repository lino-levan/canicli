# Can I CLI?

> A unified directory for seeing if your CLI tool name has already been taken.

## Motivation

This project was inspired by all of those times we thought we came up with a
unique name, only to realize there was a naming conflict this whole time with
something obvious.

## Contributing

Is there a CLI tool that we're missing? Let's add it.

1. Fork the repository
2. Add the cli tool's metadata to `cli.json`.
3. Add the cli tool's alias to `names.json`.
4. Clean the json files by running `deno task clean`.
5. Format the repository by running `deno fmt`.

Let's go through a step-by-step example! Let's say I want to add
[cookieDB](https://github.com/cookiedb/CookieDB) to the cli list.

First I'd fork the repo. Then I'll add the metadata. I will set it as follows:

```jsonc
{
  // ...
  "cookieDB": {
    "description": "A byte sized database for everyone",
    "repository": "https://github.com/cookiedb/CookieDB"
  }
  // ...
}
```

Next, I'll add cookieDB to the names list. This contains aliases. In this case,
cookieDB is run using the `cookie start` command. From this we can derive that
the alias is `cookie`. If this was the first cli tool to exist using this name,
add a new field!

```jsonc
{
  // ...
  "cookie": ["cookieDB"]
  // ...
}
```

If it's not, simply add it to the list that already exists.

```jsonc
{
  // ...
  "cookie": ["preexistingCookieRelatedThing", "cookieDB"]
  // ...
}
```

Now to finish it off, run our cleaning commands: `deno task clean && deno fmt`

You're done!

PS: Are you worried your CLI tool isn't qualified because it's not popular?
Don't be. Anything more than an internal tool should be on this list.
