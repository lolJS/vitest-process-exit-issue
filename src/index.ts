import { debug } from "@actions/core";

const action = async () => {
  debug("hello world");
  process.exit(0);
};

action();
