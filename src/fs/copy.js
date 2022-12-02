import { readdir, mkdir, copyFile, constants } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// utils
import { checkIfEntityExist } from "./utils.js";
// Constants
const errMsg = "FS operation failed";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  // Write your code here
  try {
    const srcDir = join(__dirname, `files`);
    const destDir = join(__dirname, `files_copy`);

    const isSrcDirExist = await checkIfEntityExist(srcDir);
    const isDestDirExist = await checkIfEntityExist(destDir);

    if (!isSrcDirExist || isDestDirExist) {
      throw new Error(errMsg);
    }

    if (!isDestDirExist) {
      await mkdir(destDir, { recursive: true });

      const files = await readdir(srcDir);

      for (const file of files) {
        await copyFile(
          `${srcDir}/${file}`,
          `${destDir}/${file}`,
          constants.COPYFILE_EXCL
        );
      }
    }
  } catch (err) {
    console.error("Error ", err);
    throw err;
  }
};

copy();
