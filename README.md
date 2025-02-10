# Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript error involving incorrect null handling in a simple addition function. The function `foo` is designed to add two numbers. However, it incorrectly handles null values, returning 0 instead of treating nulls as 0 for the purpose of addition.

## Bug

The bug lies in how `foo` handles null values.  It immediately returns 0 if either `a` or `b` is null, regardless of the other value.  This is incorrect; a more robust approach would treat null as 0 for the purposes of addition.

## Solution

The solution provides a corrected version of the function, which properly treats null values as 0 before performing the addition.

## How to run the code

1. Clone the repository
2. Navigate to the repository's root directory
3. Open `bug.js` and `bugSolution.js` to observe the erroneous and corrected code
4. Run `node bug.js` and `node bugSolution.js` in your terminal to see the output of both versions.