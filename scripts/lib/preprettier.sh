#!/bin/bash
set -euo pipefail

cp ${PROJECT_ROOT}/.gitignore ./.prettierignore

# ルートディレクトリの`.prettierignore`にだけ
# `apps/` と `packages/` を追加
if [ "$(pwd)" = "${PROJECT_ROOT}" ]; then
    echo "" >> ./.prettierignore
    echo "apps/" >> ./.prettierignore
    echo "packages/" >> ./.prettierignore
fi
