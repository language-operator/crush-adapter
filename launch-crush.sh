#!/bin/sh
# What tmux runs. The base already starts tmux in the working directory (the
# cloned repo when the agent sets spec.repository, else /workspace), so Crush
# opens straight into the project.
#
# Config is read from $CRUSH_GLOBAL_CONFIG/crush.json, written by
# `coding-runtime seed`. Resuming a slept agent's conversation (Crush has
# --continue) is deliberately left out until the bootstrap issue (#1) checks
# what Crush does with --continue when there is nothing to resume.
set -eu

exec crush
