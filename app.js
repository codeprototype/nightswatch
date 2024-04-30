import path from "path";
import rangers from "./ranger.js";
import builders from "./builder.js"
const dirname =
  path
    .dirname(new URL(import.meta.url).pathname)
    .split("/development")
    .pop() || "";

console.log(`Healthcheck OK, Service Name:${dirname}`);
function helloNpm(req, res, next) {
  return "hello NPM";
}

export { helloNpm, rangers, builders };
