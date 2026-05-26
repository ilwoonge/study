# AWS SDE Study Portfolio

Daily study notes for preparing for an Amazon Web Services Software Development Engineer interview.

## Pages

- `index.html`: portfolio home page
- `day1.html`: Day 1 detailed notes
- `day2.html`: Day 2 detailed notes
- `day3.html`: Day 3 detailed notes
- `day4.html`: Day 4 detailed notes
- `day5.html`: Day 5 detailed notes
- `day6.html`: Day 6 detailed notes
- `day7.html`: Day 7 detailed notes
- `day8.html`: Day 8 detailed notes
- `day9.html`: Day 9 detailed notes
- `day10.html`: Day 10 detailed notes
- `day11.html`: Day 11 detailed notes
- `day12.html`: Day 12 detailed notes
- `day13.html`: Day 13 detailed notes
- `leetcode.html`: solved LeetCode problem bank
- `roadmap.html`: full five-month AWS SDE preparation roadmap
- `roadmap-daily.js`: collapsible day-by-day roadmap data

## LeetCode Problem Bank

Solved problem pages:

- Two Sum
- Contains Duplicate
- Valid Anagram
- Group Anagrams
- Top K Frequent Elements
- Product of Array Except Self
- Valid Sudoku
- Encode and Decode Strings
- Longest Consecutive Sequence
- Reorder Data in Log Files
- Valid Palindrome
- Two Sum II - Input Array Is Sorted
- 3Sum
- Best Time to Buy and Sell Stock
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Permutation in String
- Valid Parentheses
- Min Stack
- Daily Temperatures
- Evaluate Reverse Polish Notation
- Generate Parentheses

## Day 1

Topics covered:

- Big-O notation
- O(1), O(n), and O(n log n)
- Array vs HashMap
- Why HashMap lookup is average O(1)
- Two Sum
- Contains Duplicate
- HashMap vs Set

## Day 2

Topics covered:

- Character frequency counting
- Valid Anagram
- Group Anagrams
- Client-server API flow
- Latency vs throughput
- Must-memorize interview Q&A

## Day 3

Topics covered:

- Top K Frequent Elements
- Frequency map plus sorting
- Product of Array Except Self
- Prefix and suffix products
- Reverse traversal with `range(length - 1, -1, -1)`
- Must-memorize interview Q&A

## Day 4

Topics covered:

- Valid Sudoku
- Constraint tracking with Sets
- Encode and Decode Strings
- Length-prefix encoding
- HTTP methods and status codes
- API contract basics

## Day 5

Topics covered:

- Longest Consecutive Sequence
- Set lookup and sequence starts
- Reorder Data in Log Files
- `split(" ", 1)`
- Tuple sorting with `(content, identifier, log)`
- List comprehension for extracting sorted logs

## Day 6

Topics covered:

- Two Pointers pattern
- Valid Palindrome
- Two Sum II - Input Array Is Sorted
- Character filtering with `isalnum()`
- Case-insensitive comparison with `lower()`
- Load Balancer basics

## Day 7

Topics covered:

- 3Sum
- Sort plus Two Pointers
- Duplicate skipping for fixed, left, and right values
- 3Sum complexity analysis
- Horizontal scaling vs vertical scaling

## Day 8

Topics covered:

- Sliding Window pattern
- Best Time to Buy and Sell Stock
- `float("inf")` for minimum tracking
- Longest Substring Without Repeating Characters
- Substring vs valid substring
- Cache hit, cache miss, and stale data

## Day 9

Topics covered:

- Sliding Window with frequency maps
- Longest Repeating Character Replacement
- `window_length - max_freq <= k`
- Permutation in String
- Fixed-size Sliding Window
- CDN and edge caching

## Day 10

Topics covered:

- Stack and LIFO
- Valid Parentheses
- Why closing brackets are not pushed to the stack
- Min Stack with two stacks
- O(1) stack operations
- Database index basics

## Day 11

Topics covered:

- Monotonic Stack
- Daily Temperatures
- Why monotonic stack stores indexes
- O(n) analysis for nested stack loops
- SQL vs NoSQL database choices
- AWS database mapping: RDS, Aurora, DynamoDB, ElastiCache

## Day 12

Topics covered:

- Evaluate Reverse Polish Notation
- Stack-based expression evaluation
- Operand order for subtraction and division
- Division truncation toward zero
- Database replication
- Strong consistency vs eventual consistency

## Day 13

Topics covered:

- Backtracking pattern
- Generate Parentheses
- Recursive choice constraints
- Why `open_count < n` prevents too many opening parentheses
- Why `close_count < open_count` keeps prefixes valid
- Database sharding and partitioning
- Replication vs sharding
- Good partition key tradeoffs

## Run locally

Open `index.html` in a browser.

## GitHub Pages

This repo is ready for GitHub Pages. In GitHub, go to:

`Settings -> Pages -> Deploy from a branch -> gh-pages -> /root`
