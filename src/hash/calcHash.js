import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const srcFile = "./files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  // Write your code here
  const filePath = new URL(srcFile, import.meta.url);
  const contents = await readFile(filePath, { encoding: "utf8" });
  const hex = createHash("sha256").update(contents).digest("hex");

  console.log(`hex ${hex}`);
};

await calculateHash();
