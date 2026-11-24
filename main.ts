import { mkdirSync, writeFileSync } from "node:fs";

// One line, one joke: the setup pays off in the promotion.
const JOKE =
  "The office plant died of neglect, so we promoted it to middle management.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
