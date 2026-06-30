import { unified } from "@astrojs/markdown-remark";
import remarkDirective from "remark-directive";
import remarkCvDirectives from "./src/lib/remark-cv-directives.mjs";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "My-website";
const isUserSite = repoName.toLowerCase() === "nithador.github.io";

export default {
  site: "https://nithador.github.io",
  base: isUserSite ? "/" : `/${repoName}/`,
  output: "static",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkCvDirectives]
    })
  }
};
