#!/bin/bash
# Run this once from inside the charity-react folder:
#   bash setup.sh

# 1. Copy assets from the parent project into public/
mkdir -p public/assets
cp -r ../assets/images public/assets/

echo "✅ Assets copied to public/assets/images/"

# 2. Install dependencies
npm install

echo "✅ Dependencies installed."
echo ""
echo "👉 Now run:  npm run dev"
