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
  const filesDir = join(__dirname, `files`);

  const isFilesDirExist = await checkIfEntityExist(filesDir);

  if (isFilesDirExist) {
    const files = await readdir(filesDir);
    console.log(files);
  } else {
    throw new Error(errMsg);
  }
};

await list();
