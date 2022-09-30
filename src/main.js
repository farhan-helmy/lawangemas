import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";
import App from "./App.vue";

import "./style.css";

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app }) => {
    // install plugins etc.

    app.use(createPinia());
    app.use(
      plugin,
      defaultConfig({
        config: {
          classes: generateClasses({
            text: {
              outer: "mb-5",
              label: "block mb-1 font-bold text-sm",
              inner:
                "max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500",
              input:
                "w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400",
              help: "text-xs text-gray-500",
              messages: "list-none p-0 mt-1 mb-0",
              message: "text-red-500 mb-1 text-xs",
            },
          }),
        },
      })
    );
  }
);
