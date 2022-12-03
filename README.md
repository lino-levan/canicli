# Can I CLI?

> A unified directory for seeing if your CLI tool name has already been taken.

## Motivation

This project was inspired by all of those times we thought we came up with a
unique name, only to realize there was a naming conflict this whole time with
something obvious.

## Contributing

Is there a CLI tool that we're missing? Let's add it.

1. Fork the repository
2. Run `deno task add`
3. Make a PR!

Let's go through a step-by-step example! Let's say I want to add
[cookieDB](https://github.com/cookiedb/CookieDB) to the cli list.

```
$ deno task add
What is the name of the CLI tool you would like to add? cookieDB
What are the alias(es) for this tool (if multiple, separate by spaces)? cookie
What is a quick description of this tool? A byte sized db for everyone
Is this tool built-in to any popular OS (y/n)? n
What is the git repository for this tool? https://github.com/cookiedb/CookieDB
```

You're done!

PS: Are you worried your CLI tool isn't qualified because it's not popular?
Don't be. Anything more than an internal tool should be on this list.
