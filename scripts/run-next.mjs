import { spawnSync } from "node:child_process";

const command = process.argv[2];
const outputDirectories = {
  dev: ".next-dev",
  build: ".next-local",
  start: ".next-local",
};

if (!outputDirectories[command]) {
  console.error("Usage: node scripts/run-next.mjs <dev|build|start>");
  process.exit(1);
}

const result = spawnSync(
  process.platform === "win32" ? "next.cmd" : "next",
  [command, ...process.argv.slice(3)],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_DIST_DIR: outputDirectories[command],
    },
    shell: process.platform === "win32",
  },
);

if (result.error) throw result.error;
process.exit(result.status ?? 1);
