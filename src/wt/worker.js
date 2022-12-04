import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (isMainThread) {
    const worker = new Worker(__filename, { workerData: 3 });

    worker.on("message", (msg) =>
      console.log(`Worker message received: ${msg}`)
    );

    worker.on("exit", (code) => {
      console.log(`Worker exited with code ${code}.`);
    });
  } else {
    console.log(`Data from main thread ${workerData}`);

    parentPort.postMessage(nthFibonacci(workerData));
  }
};

sendResult();
