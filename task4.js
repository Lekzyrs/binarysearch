"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const weights = input[1].split(" ").map(Number);
function canDistribute(maxWeight) {
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
    }
    else {
        left = mid + 1;
    }
}
fs.writeFileSync("output.txt", result.toString());
