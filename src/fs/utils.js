import { access } from "node:fs/promises";

const checkIfEntityExist = async (path) => {
  try {
    await access(path);

    return true;
  } catch {
    return false;
  }
};

export {
  checkIfEntityExist,
};
