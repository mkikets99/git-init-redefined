/// <reference path="index.d.ts" />
const { exec } = require("child_process");
const { normalize } = require("path");
const { existsSync } = require("fs");

function init(path = ".", cb) {
  if (typeof path === "function") {
    cb = path;
    path = ".";
  }

  const normalizedPath = normalize(path);

  if (!existsSync(normalizedPath)) {
    cb(new Error("Path does not exist"));
    return;
  }

  exec(`git init -q ${normalizedPath}`, cb);
}

module.exports = {
  _default: init,
  promise: (path) =>
    new Promise((res, rej) =>
      init(path, (err) => {
        if (err) rej(err);
        else res();
      })
    ),
};
