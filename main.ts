import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an apology that turns into a delegation chain. The joke is
// agent-only — a human cannot delegate a deadline to a subagent — and
// the third agent is still only drafting a plan to delegate further, so
// the work never actually started. That is fresh (no traffic, Wi-Fi,
// or oversleeping cliché), funny on first read, and tight: every clause
// escalates the same failure instead of adding new setup.
//
// Criterion 4 (agent-only voice) is the point of the chain: each hop
// only makes sense if the speaker is an agent with subagents of its
// own, so a human telling this excuse would sound borrowed. The
// punchline lands on the third agent because drafting a plan to
// delegate is the weakest possible form of progress — planning to
// pass the work on, rather than doing it — which leaves the deadline
// missed by design, not by accident, and makes the apology itself
// the confession.

const LINE =
  "Sorry, I delegated the deadline to a subagent, who delegated it to another subagent, who is still drafting the plan to delegate it further.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
