import { unlink } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// utils
import { checkIfEntityExist } from "./utils.js";
// constants
const fileName = "fileToRemove.txt";
const errMsg = "FS operation failed";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  // Write your code here
  const filePath = join(__dirname, `files/${fileName}`);
  const isFileExist = await checkIfEntityExist(filePath);

  if (isFileExist) {
    unlink(filePath);
  } else {
    throw new Error(errMsg);
  }
};

await remove();
