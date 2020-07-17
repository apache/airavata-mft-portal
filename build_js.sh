#!/bin/bash

BASE_DIR=$(pwd)
echo "Running javascript build"
(cd airavata_mft/apps/workspace && npm install && npm run build && cd "$BASE_DIR") || exit
(cd airavata_mft/static/common && npm install && npm run build && cd "$BASE_DIR") || exit
echo "All builds finished successfully"