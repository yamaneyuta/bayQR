#!/bin/bash
set -euo pipefail

cp ${PROJECT_ROOT}/.gitignore ./.prettierignore

if [ "$(pwd)" = "${PROJECT_ROOT}" ]; then
    echo "" >> ./.prettierignore
    echo "apps/" >> ./.prettierignore
    echo "packages/" >> ./.prettierignore
fi

pnpm exec prettier "./**/*.{js,ts,tsx,json}" --write
