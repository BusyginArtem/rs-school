import { rename as renameFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// utils
import { checkIfEntityExist } from "./utils.js";

// Constants
const errMsg = "FS operation failed";
const initialFileName = "wrongFilename.txt";
const targetFileName = "properFilename.md";

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  // Write your code here
  try {
    const initialFile = join(__dirname, `files/${initialFileName}`);
    const targetFile = join(__dirname, `files/${targetFileName}`);

    const isInitFileExist = await checkIfEntityExist(initialFile);
    const isTargetFilerExist = await checkIfEntityExist(targetFile);

    if (!isInitFileExist || isTargetFilerExist) {
      throw new Error(errMsg);
    }

    await renameFile(initialFile, targetFile);
  } catch (error) {
    console.error("Error ", error);
    throw error;
  }
};

await rename();
