import { fork, spawn } from "node:child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// CONSTANTS
const fileName = "script.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  // Write your code here
  const filePath = join(__dirname, `files/${fileName}`);

  fork(filePath, args);
};

spawnChildProcess();
