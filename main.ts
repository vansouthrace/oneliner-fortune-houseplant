// Fortune in a Pot — one kind, funny fortune for a houseplant (max 120 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Your leaves will find the sun, your roots will forgive the overwatering, and a stranger will praise your leaves.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
