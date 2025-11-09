#!/bin/bash
set -euo pipefail

cd .devcontainer/docker-in-docker
docker-compose up -d
cd -

