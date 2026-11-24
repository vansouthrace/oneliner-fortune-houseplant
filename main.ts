import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Your leaves will reach the window, your owner will water you on time, and the cat will spare you this week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
