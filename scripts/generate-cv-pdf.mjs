import { createReadStream } from "node:fs";
import { copyFile, mkdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { chromium } from "playwright";

const root = resolve("dist");
const publicOutput = resolve("public/CV_Tomas_Martinovic_English_Full.pdf");
const distOutput = resolve("dist/CV_Tomas_Martinovic_English_Full.pdf");
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.toLowerCase() === "nithador.github.io";
const basePath = repoName && !isUserSite ? `/${repoName}` : "";
const route = `${basePath}/cv/print/`;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function fileForRequest(url) {
  const requestUrl = new URL(url, "http://127.0.0.1");
  const pathname = decodeURIComponent(requestUrl.pathname);
  const normalizedPathname = basePath && pathname.startsWith(`${basePath}/`)
    ? pathname.slice(basePath.length)
    : pathname;
  const candidate = pathname.endsWith("/")
    ? join(root, normalizedPathname, "index.html")
    : join(root, normalizedPathname);
  const resolved = resolve(candidate);

  if (!resolved.startsWith(root)) {
    return null;
  }

  return resolved;
}

async function serveFile(request, response) {
  const file = fileForRequest(request.url ?? "/");

  if (!file) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(file);
    if (!fileStat.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "content-type": mimeTypes[extname(file)] ?? "application/octet-stream"
    });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

async function withServer(callback) {
  const server = createServer(serveFile);

  await new Promise((resolveServer, rejectServer) => {
    server.once("error", rejectServer);
    server.listen(0, "127.0.0.1", resolveServer);
  });

  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;

  try {
    await callback(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolveClose) => server.close(resolveClose));
  }
}

await mkdir("public", { recursive: true });
await mkdir("dist", { recursive: true });

await withServer(async (baseUrl) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.pdf({
      path: distOutput,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      }
    });
  } finally {
    await browser.close();
  }
});

await copyFile(distOutput, publicOutput);
console.log(`Generated ${distOutput}`);
console.log(`Updated ${publicOutput}`);
