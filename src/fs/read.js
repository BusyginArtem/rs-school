import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFile } from "node:fs/promises";
// utils
import { checkIfEntityExist } from "./utils.js";
// CONSTANTS
const fileName = "fileToRead.txt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  // Write your code here
  const filePath = join(__dirname, `files/${fileName}`);
  const isFileExist = await checkIfEntityExist(filePath);

  if (isFileExist) {
    const content = await readFile(filePath, { encoding: "utf8" });

    process.stdout.write(content);
  } else {
    throw new Error(errMsg);
  }
};

await read();
