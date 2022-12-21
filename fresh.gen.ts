// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/SoundBoard.tsx";
import * as $$1 from "./islands/SoundBoardButton.tsx";
import * as $$2 from "./islands/ThemeToggle.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/SoundBoard.tsx": $$0,
    "./islands/SoundBoardButton.tsx": $$1,
    "./islands/ThemeToggle.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
