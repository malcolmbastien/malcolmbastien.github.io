#!/bin/bash
# Replace "../../../../" with "../../../" in all markdown files
# Dry-run first, then do the replacement

NOTES_DIR="/home/malcolm/Development/microblog/src/content/notes"

echo "=== Files matching '../../../../' ==="
grep -rl "../../../../" "$NOTES_DIR"/
echo "--- $(grep -rl "../../../../" "$NOTES_DIR"/ | wc -l) files total ---"

# Show a few examples of what will change
echo ""
echo "=== Sample changes ==="
grep -n "../../../../" "$NOTES_DIR"/2023-year-in-review.md | head -3
echo "  ↓ becomes"
grep -n "../../../../" "$NOTES_DIR"/2023-year-in-review.md | head -3 | sed 's|../../../../|../../../|g'

read -p $'\nProceed with replacement? (y/N) ' -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
  find "$NOTES_DIR" -name '*.md' -exec sed -i 's|../../../../|../../../|g' {} +
  echo "Done. Verifying..."
  remaining=$(grep -rl "../../../../" "$NOTES_DIR"/ 2>/dev/null | wc -l)
  if [ "$remaining" -eq 0 ]; then
    echo "✅ All replacements successful — no remaining '../../../../' references."
  else
    echo "⚠️  $remaining files still have matches (check them)."
  fi
else
  echo "Aborted."
fi
