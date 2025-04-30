import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function findLowerBound(arr: number[], x: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left < arr.length ? left : -1;
}

const result = findLowerBound(arr, x);
fs.writeFileSync("output.txt", result.toString());
