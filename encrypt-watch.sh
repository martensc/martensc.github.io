#!/bin/bash

# Wait for initial build
sleep 2

# Encrypt work pages after initial build
echo "Encrypting work pages..."
npm run encrypt:work

# Watch for changes to work files and re-encrypt
while true; do
  # Use fswatch if available, otherwise fall back to basic loop
  if command -v fswatch &> /dev/null; then
    fswatch -o _site/work.html _site/work/*.html 2>/dev/null | while read num ; do
      echo "Changes detected, re-encrypting work pages..."
      npm run encrypt:work
    done
  else
    # Fallback: check every 3 seconds
    sleep 3
    npm run encrypt:work 2>/dev/null
  fi
done
