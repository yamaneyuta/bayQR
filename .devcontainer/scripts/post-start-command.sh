#!/bin/bash
set -euo pipefail

cd .devcontainer/docker-in-docker
docker-compose up -d
cd -

# Wait for LocalStack to be ready
echo "⏳ Waiting for LocalStack to be ready..."
while ! curl -s http://localhost:4566 > /dev/null; do
    echo "LocalStack not ready yet, waiting..."
    sleep 2
done
echo "🚀 LocalStack is ready!"
