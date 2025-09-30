#!/bin/bash
set -e

echo "Starting Cloudflare build process..."

# Run the OpenNext build process
npm run build:cloudflare

echo "Build completed successfully!"
