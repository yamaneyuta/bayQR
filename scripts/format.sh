#!/bin/bash
set -euo pipefail

pnpm exec prettier "./**/*.{ts,tsx,json}" --write
