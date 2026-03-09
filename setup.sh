#!/bin/bash
set -e

echo "Setting up Conventional Comments for Raycast..."

# Install dependencies
npm install --silent

# Build and register the extension with Raycast
npm run build

echo ""
echo "Done! The extension is now available in Raycast."
echo "Open Raycast and search for 'Insert Conventional Comment' to use it."
