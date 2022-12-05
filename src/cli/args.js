const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  let key = null;

  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    if (element.startsWith("--")) {
      key = element;
    } else {
      if (key) {
        console.log(`${key.replace("--", "")} is ${element}`);
      }

      key = null;
    }
  }
};

parseArgs();
