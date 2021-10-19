#!/bin/bash
#
# Create commit:
# Files

num="${1:-1}"
for((i=0; i < num; i++))
do
  echo $i >> commit_file
  git add commit_file
  git commit -m "$i"
  git push
done
