import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function findPeak(arr: number[]): number {
  if (arr.length <= 2) {
    return 0;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (
      (mid === 0 || arr[mid] > arr[mid - 1]) &&
      (mid === arr.length - 1 || arr[mid] > arr[mid + 1])
    ) {
      return mid;
    }

    if (mid > 0 && arr[mid] > arr[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}

const result = findPeak(arr);
fs.writeFileSync("output.txt", result.toString());
