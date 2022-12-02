import { writeFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// utils
import { checkIfEntityExist } from "./utils.js";
// CONSTANTS
const fileName = "fresh.txt";
const text = "I am fresh and young";
const errMsg = "FS operation failed";

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  // Write your code here
  try {
    const filePath = join(__dirname, `files/${fileName}`);
    const isFileExist = await checkIfEntityExist(filePath);

    if (isFileExist) {
      throw new Error(errMsg);
    } else {
      await writeFile(filePath, text);
    }
  } catch (error) {
    console.error("Error ", err);
    throw err;
  }
};

await create();
