import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "node:fs";
// CONSTANTS
const fileName = "fileToWrite.txt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const file = createWriteStream(join(__dirname, `files/${fileName}`));

  process.stdin.on("data", (data) => {
    file.write(data);
    
    process.exit();
  });
};

await write();
