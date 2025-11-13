#!/bin/bash
set -euo pipefail

if [ -f "./tsconfig.json" ]; then
    export PROJECT="./tsconfig.json"
elif [ -f "./tsconfig.esm.json" ]; then
    export PROJECT="./tsconfig.esm.json"
elif [ -f "./tsconfig.cjs.json" ]; then
    export PROJECT="./tsconfig.cjs.json"
else
    echo "[88B44438] No tsconfig file found in $(pwd)."
    exit 1
fi

pnpm exec tsc --noEmit --strict --skipLibCheck -p "$PROJECT" "$@"
