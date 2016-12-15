#!/bin/bash

if [ $# -ne 2 ]
  then
    echo "Usage: $0 <input file> <output file>"
    exit 1
fi

IN_FILE="$1"
OUT_FILE="$2"
TMP_FILE=`mktemp -t  XXXX`

cp "$IN_FILE" "$TMP_FILE"

echo "$IN_FILE, $OUT_FILE, $TMP_FILE"

convert "$TMP_FILE" -resize 70% "$TMP_FILE"  && convert -border 2x2 -bordercolor '#000000' "$TMP_FILE" "$OUT_FILE"

rm "$TMP_FILE"
