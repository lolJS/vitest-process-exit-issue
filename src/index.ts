import { debug } from "@actions/core";

const somePromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 100);
  });

const action = async () => {
  debug("hello world");

  await somePromise();

  process.exit(0);
};

action();
