import cliJSON from "../../cli.json" assert { type: "json" };
import namesJSON from "../../names.json" assert { type: "json" };
import { useState } from "preact/hooks";

const cli: Record<string, {
  description: string;
  repository?: string;
  builtIn?: boolean;
}> = cliJSON;

const names: Record<string, string[]> = namesJSON;

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div class="flex flex-col gap-2 w-full">
      <input
        class="w-full py-2 px-4 border rounded dark:(bg-coolGray-800 border-coolGray-500 text-white)"
        placeholder="sh"
        value={query}
        onInput={(e) => {
          if (e.target) {
            setQuery((e.target as HTMLInputElement).value);
          }
        }}
      />
      <div>
        {Object.keys(names).filter((key) => key.startsWith(query)).map((
          key,
        ) => (
          <div
            class="w-full py-2 px-4 border-b dark:(border-coolGray-500)"
            id={key}
          >
            <p class="text-xl text-coolGray-400 p-2 bg-coolGray-100 rounded dark:(bg-coolGray-800 text-coolGray-300)">
              $ <span class="text-green-400">{key}</span>
            </p>
            <div>
              {names[key].map((key: string) => (
                <div class="w-full flex gap-2 pt-2">
                  {cli[key].repository && (
                    <a
                      href={cli[key].repository}
                      class="text-coolGray-700 text-underline dark:(text-coolGray-300)"
                    >
                      {key}
                    </a>
                  )}
                  {!cli[key].repository && (
                    <p class="text-coolGray-700 dark:(text-coolGray-300)">
                      {key}
                    </p>
                  )}
                  <p class="text-coolGray-400">{cli[key].description}</p>
                  {cli[key].builtIn && (
                    <p class="ml-auto p-1 rounded text-right text-black bg-green-300 dark:(bg-green-600 text-white)">
                      built-in
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
