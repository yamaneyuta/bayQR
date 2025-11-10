#!/bin/bash
set -euo pipefail

pipx install awscli awscli-local

pnpm install --frozen-lockfile
pnpm exec husky
