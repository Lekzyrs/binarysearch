import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const weights = input[1].split(" ").map(Number);

function canDistribute(maxWeight: number): boolean {
  if (weights.some((w) => w > maxWeight)) {
    return false;
  }

  const sortedWeights = [...weights].sort((a, b) => b - a);
  const trucks = new Array(K).fill(0);

  for (const weight of sortedWeights) {
    let added = false;
    for (let i = 0; i < K; i++) {
      if (trucks[i] + weight <= maxWeight) {
        trucks[i] += weight;
        added = true;
        break;
      }
    }
    if (!added) {
      return false;
    }
  }

  return true;
}

let left = Math.max(...weights);
let right = weights.reduce((a, b) => a + b, 0);
let result = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (canDistribute(mid)) {
    result = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

fs.writeFileSync("output.txt", result.toString());
