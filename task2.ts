import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function findClosestElement(arr: number[], X: number): number {
  let minDiff = Infinity;
  let closestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - X);

    if (diff < minDiff || (diff === minDiff && i < closestIndex)) {
      minDiff = diff;
      closestIndex = i;
    }
  }

  return closestIndex;
}

const result = findClosestElement(arr, X);
fs.writeFileSync("output.txt", result.toString());
