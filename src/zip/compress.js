import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// CONSTANTS
const srcFile = "fileToCompress.txt";
const dirFile = "archive.gz";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  // Write your code here
  const gzip = createGzip();
  const source = createReadStream(join(__dirname, `files/${srcFile}`));
  const destination = createWriteStream(join(__dirname, `files/${dirFile}`));

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    } else {
      console.log("Pipeline succeeded.");
    }
  });
};

await compress();
