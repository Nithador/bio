import { unified } from "@astrojs/markdown-remark";
import remarkDirective from "remark-directive";
import remarkCvDirectives from "./src/lib/remark-cv-directives.mjs";

export default {
  site: "https://nithador.github.io",
  output: "static",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkCvDirectives]
    })
  }
};
