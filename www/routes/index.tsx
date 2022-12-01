import { Head } from "$fresh/runtime.ts";
import Search from "../islands/Search.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Can I CLI?</title>
      </Head>
      <div class="w-full min-h-screen bg-white dark:(bg-coolGray-900)">
        <div class="p-4 mx-auto max-w-screen-md">
          <h1 class="my-6 text-4xl text-black dark:(text-white)">
            Can I CLI?
          </h1>
          <Search />
        </div>
      </div>
    </>
  );
}
