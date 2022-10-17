import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";
import formkitTheme from "@/formkit-theme";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
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
    app.use(autoAnimatePlugin);
    app.use(
      plugin,
      defaultConfig({
        config: {
          classes: generateClasses(formkitTheme),
        },
      })
    );
  }
);
