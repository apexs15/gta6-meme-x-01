// main.ts — gta6-meme-x-01 entry program (Node 22, standard library only).
//
// It copies POST.json from the repository root to the output directory.
// That is all it has to do: the house reads the post itself from X.
// No network, no wall clock, no files outside the repository.
// The copy is byte-for-byte, so two runs write identical bytes.
//
// The grader runs it as:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
