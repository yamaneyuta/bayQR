#!/bin/bash
set -euo pipefail

OPTIONS=--coverage

# 環境変数にCIが設定されていない場合は --verbose オプションを追加
if [ -z "${CI:-}" ]; then
    OPTIONS="$OPTIONS --verbose"
fi

pnpm jest $OPTIONS