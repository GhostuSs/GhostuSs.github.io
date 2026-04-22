#!/bin/bash
# Quick deploy for the profile photo.
# Usage: put your photo at assets/photo.jpg, then run ./deploy-photo.sh

set -e

if [ ! -f "assets/photo.jpg" ]; then
  echo "❌ assets/photo.jpg not found. Save your photo there first."
  exit 1
fi

echo "📸 Photo found: $(ls -lah assets/photo.jpg | awk '{print $5}')"
git add assets/photo.jpg
git commit -m "add: profile photo" || {
  echo "⚠️  nothing to commit (photo already tracked and unchanged)"
  exit 0
}
git push
echo ""
echo "✅ Pushed. Photo will be live on https://ghostuss.github.io/ in ~1 minute."
