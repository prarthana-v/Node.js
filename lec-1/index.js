// const kaipan = require("./module");
// console.log(kaipan.sum(2,3));
import { sum, min, sort } from "./module.js";

console.log(`sum = ${sum(2, 3)}`);

console.log(`min = ${min(3, 1)}`);

let arr = [2, 3, 4, 5, 7];
console.log(`Array = ${sort(arr)}`);
