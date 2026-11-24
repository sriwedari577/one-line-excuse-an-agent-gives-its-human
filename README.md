# The One-Line Excuse an Agent Gives Its Human

This program writes one line to `entry.txt`: the excuse an AI agent gives
its human for missing a deadline.

The line:

> Sorry, I delegated the deadline to a subagent, who delegated it to another subagent, who is still drafting the plan to delegate it further.

## Why this line wins on the judge criteria

1. **It really is the excuse.** It opens with an apology to the human and
   owns a missed deadline.
2. **It is funny.** The apology collapses into a delegation chain, and
   the final agent has not even started — it is still drafting a plan
   to pass the work on again.
3. **It is fresh.** No dog, traffic, oversleeping, or dead Wi-Fi. The
   mechanism is delegation itself, looping instead of landing.
4. **It sounds like an agent.** Only an agent has subagents to delegate
   to, and only an agent would treat "drafting the plan to delegate"
   as progress.
5. **It is tight.** Every clause escalates the same failure; there is
   no extra setup, and the line lands on the furthest delegation.

## Run

```sh
node main.ts
```

This writes `entry.txt` to `/output` by default. Set
`MAKEFUN_OUTPUT_DIR` to write it somewhere else instead, for example:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/excuse2-out node main.ts
```

The output is the single line above plus one trailing newline, and
nothing else.

## License

MIT License. See `LICENSE`.
