import { cpus } from "os";
import { Worker } from "node:worker_threads";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// constants
const START_COUNT = 10;

const __dirname = dirname(fileURLToPath(import.meta.url));

const modifyResult = (result) => {
  if (result.status === "fulfilled") {
    return {
      status: "resolved",
      data: result.value,
    };
  } else {
    return {
      status: "error",
      data: null,
    };
  }
};

const performCalculations = async () => {
  // Write your code here
  const cpusLength = cpus().length;
  const workerResults = [];

  for (let index = 0; index < cpusLength; index++) {
    const workerResult = new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, "worker.js"), {
        workerData: START_COUNT + index,
      });

      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker is stopped with exit code ${code}`));
        }
      });
    });

    workerResults.push(workerResult);
  }

  const results = await Promise.allSettled(workerResults);

  const processedResult = results.map(modifyResult);

  console.log(processedResult);
};

await performCalculations();
