import path from "path";
import fs from "fs-extra";

const docusaurusBuild = path.join(
  import.meta.dirname,
  "apps",
  "docu-app",
  "build"
);

const blogBuild = path.join(import.meta.dirname, "apps", "blog-app", "build");

const nextjsDocsPublic = path.join(
  import.meta.dirname,
  "apps",
  "next-app",
  "public",
  "docs"
);

const nextjsBlogsPublic = path.join(
  import.meta.dirname,
  "apps",
  "next-app",
  "public",
  "blog"
);

fs.emptyDirSync(nextjsDocsPublic);
fs.emptyDirSync(nextjsBlogsPublic);
fs.copySync(docusaurusBuild, nextjsDocsPublic);
fs.copySync(blogBuild, nextjsBlogsPublic);

console.log("Docs copied from Docusaurus to Next.js");
