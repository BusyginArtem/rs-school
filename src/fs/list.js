import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readdir } from "node:fs/promises";
// utils
import { checkIfEntityExist } from "./utils.js";
// Constants
const errMsg = "FS operation failed";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  // Write your code here

  const files = await readdir(path);
  for (const file of files) console.log(file);
};

await list();
