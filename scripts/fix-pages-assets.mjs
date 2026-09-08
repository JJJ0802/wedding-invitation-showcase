import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = "out";
const prefix = "/wedding-invitation-showcase";

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if (/\.(html|txt|js)$/.test(entry.name)) {
      const source = await readFile(path, "utf8");
      const updated = source.replace(
        /(?<!wedding-invitation-showcase)\/(?!_next\/)([^"'\\s]+\.(?:png|jpe?g|svg))/g,
        `${prefix}/$1`,
      );
      if (updated !== source) await writeFile(path, updated);
    }
  }
}

await visit(root);
