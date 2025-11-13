#!/bin/bash
set -euo pipefail

THIS_FILE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${THIS_FILE_DIR}/lib/preprettier.sh"

pnpm exec prettier "./**/*.{js,ts,tsx,json}" --write "$@"
