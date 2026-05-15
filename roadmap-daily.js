const roadmapWeeks = [
  {
    week: 1,
    title: "Arrays and HashMap Foundations",
    goal: "Build Big-O intuition and learn fast lookup with HashMap and Set.",
    days: [
      {
        day: 1,
        title: "Big-O, HashMap, and Set",
        leetcode: ["Two Sum", "Contains Duplicate"],
        concept: "Big-O, O(1), O(n), O(n log n), Array vs HashMap, average O(1) lookup.",
        design: "No design deep dive. Write one short STAR story about a recent project.",
        review: "Explain why Two Sum uses number -> index and why Contains Duplicate uses a Set."
      },
      {
        day: 2,
        title: "String Frequency Counting",
        leetcode: ["Valid Anagram", "Group Anagrams"],
        concept: "Character frequency maps, sorted keys, and normalized representation.",
        design: "Client, server, API contract, latency, and throughput basics.",
        review: "Explain count.get(ch, 0) + 1 and why anagrams share the same sorted key."
      },
      {
        day: 3,
        title: "Frequency Ranking and Prefix/Suffix",
        leetcode: ["Top K Frequent Elements", "Product of Array Except Self"],
        concept: "Count then rank; carry prefix and suffix information to avoid repeated work.",
        design: "Review Python dict, set, list, sorting, and reverse traversal patterns.",
        review: "Explain O(n + m log m) for Top K and range(length - 1, -1, -1)."
      },
      {
        day: 4,
        title: "Sudoku State and String Encoding",
        leetcode: ["Valid Sudoku", "Encode and Decode Strings"],
        concept: "Use Sets to validate rows, columns, boxes, and use length-prefix encoding.",
        design: "HTTP basics: GET, POST, PUT, PATCH, DELETE, and common status codes.",
        review: "Explain how to design a safe string encoding that handles delimiters."
      },
      {
        day: 5,
        title: "Longest Consecutive Sequence",
        leetcode: ["Longest Consecutive Sequence", "Reorder Data in Log Files"],
        concept: "Use a Set to find sequence starts and avoid sorting when O(n) is possible.",
        design: "Behavioral: write an Ownership story using STAR.",
        review: "Explain why only numbers without num - 1 start a new sequence."
      },
      {
        day: 6,
        title: "Week 1 Mock and Review",
        leetcode: ["Review: Two Sum", "Review: Group Anagrams", "Review: Product of Array Except Self"],
        concept: "Redo three problems without looking at notes; write complexity from memory.",
        design: "Mock explanation: talk through one HashMap problem for 10 minutes.",
        review: "Record the mistakes you made and schedule them for spaced repetition."
      },
      {
        day: 7,
        title: "Recovery and Error Log",
        leetcode: ["Redo two missed Week 1 problems"],
        concept: "Light review of HashMap, Set, frequency map, and prefix/suffix.",
        design: "Rest or organize notes. No new design topic.",
        review: "Create flashcards for five key Day 1-3 concepts."
      }
    ]
  },
  {
    week: 2,
    title: "Two Pointers and Sliding Window",
    goal: "Learn pointer movement and window expansion/shrink conditions.",
    days: [
      {
        day: 1,
        title: "Two Pointers Basics",
        leetcode: ["Valid Palindrome", "Two Sum II - Input Array Is Sorted"],
        concept: "Move left/right pointers based on sorted order or character validity.",
        design: "Review array access, string cleanup, and edge cases.",
        review: "Explain why sorted input lets you move one pointer at a time."
      },
      {
        day: 2,
        title: "Pair Search and Area Optimization",
        leetcode: ["3Sum", "Container With Most Water"],
        concept: "Skip duplicates, sort first when needed, and choose pointer movement by bottleneck.",
        design: "Load balancer basics and why horizontal scaling needs traffic distribution.",
        review: "Explain duplicate handling in 3Sum and why the shorter wall moves in Container."
      },
      {
        day: 3,
        title: "Intro to Sliding Window",
        leetcode: ["Best Time to Buy and Sell Stock", "Longest Substring Without Repeating Characters"],
        concept: "Track best state while scanning once; maintain a valid window with a Set or map.",
        design: "Review latency impact of repeated database calls.",
        review: "Explain window state and when the left pointer moves."
      },
      {
        day: 4,
        title: "Variable Window with Counts",
        leetcode: ["Longest Repeating Character Replacement", "Permutation in String"],
        concept: "Use frequency counts inside a window and define validity conditions precisely.",
        design: "Cache basics: Redis, CDN, TTL, cache hit, and cache miss.",
        review: "Write the exact condition that makes each window valid or invalid."
      },
      {
        day: 5,
        title: "Hard Sliding Window",
        leetcode: ["Minimum Window Substring", "Find All Anagrams in a String"],
        concept: "Track required counts, formed characters, and shrink only when the window is valid.",
        design: "Behavioral: write a Customer Obsession story.",
        review: "Explain why Minimum Window needs both expansion and aggressive shrinking."
      },
      {
        day: 6,
        title: "Sliding Window Mock",
        leetcode: ["Review: Longest Substring Without Repeating Characters", "Review: Minimum Window Substring"],
        concept: "Solve with a timer and explain your invariant before coding.",
        design: "Draw request flow with load balancer and cache.",
        review: "List the three most common window mistakes you made."
      },
      {
        day: 7,
        title: "Recovery and Spaced Repetition",
        leetcode: ["Redo two missed Week 2 problems"],
        concept: "Light review of two pointers and window validity.",
        design: "Rest or update notes.",
        review: "Make one-page cheat sheet for two pointers vs sliding window."
      }
    ]
  },
  {
    week: 3,
    title: "Stack, Queue, and Binary Search",
    goal: "Recognize monotonic stack and binary search over index or answer space.",
    days: [
      {
        day: 1,
        title: "Stack Basics",
        leetcode: ["Valid Parentheses", "Min Stack"],
        concept: "Use stack for last-in-first-out state and maintain auxiliary minimum state.",
        design: "Review API error handling and input validation.",
        review: "Explain why stack is natural for nested parentheses."
      },
      {
        day: 2,
        title: "Monotonic Stack",
        leetcode: ["Evaluate Reverse Polish Notation", "Daily Temperatures"],
        concept: "Use stack to store unresolved items until a future value resolves them.",
        design: "Operational thinking: what logs would help debug wrong calculations?",
        review: "Explain what is stored in the stack and why."
      },
      {
        day: 3,
        title: "Binary Search Basics",
        leetcode: ["Binary Search", "Search Insert Position"],
        concept: "Practice low, high, mid boundaries and inclusive search loops.",
        design: "Caching, CDN, TTL, invalidation, and stale data trade-offs.",
        review: "Explain why the loop terminates and what high/low mean."
      },
      {
        day: 4,
        title: "Rotated Binary Search",
        leetcode: ["Search in Rotated Sorted Array", "Find Minimum in Rotated Sorted Array"],
        concept: "Identify the sorted half and decide which side can contain the answer.",
        design: "Review database index basics and why sorted structures help search.",
        review: "Explain sorted-half detection out loud."
      },
      {
        day: 5,
        title: "Binary Search on Answer",
        leetcode: ["Koko Eating Bananas", "Time Based Key-Value Store"],
        concept: "Search the answer space and use sorted timestamps for historical lookup.",
        design: "Behavioral: write a Dive Deep story.",
        review: "Explain the feasibility function for Koko."
      },
      {
        day: 6,
        title: "Stack and Binary Search Mock",
        leetcode: ["Review: Daily Temperatures", "Review: Search in Rotated Sorted Array"],
        concept: "Timed practice: one stack problem and one binary search problem.",
        design: "Explain cache + database request flow.",
        review: "Write boundary mistakes and corrected templates."
      },
      {
        day: 7,
        title: "Recovery and Error Log",
        leetcode: ["Redo one stack miss", "Redo one binary search miss"],
        concept: "Light review of monotonic stack and binary search templates.",
        design: "Rest or update notes.",
        review: "Create flashcards for binary search boundary conditions."
      }
    ]
  },
  {
    week: 4,
    title: "Linked List, Recursion, and LRU",
    goal: "Master pointer updates, dummy nodes, and linked structures.",
    days: [
      {
        day: 1,
        title: "Linked List Basics",
        leetcode: ["Reverse Linked List", "Merge Two Sorted Lists"],
        concept: "Practice pointer reassignment order and iterative list merging.",
        design: "Review data structure trade-offs: arrays vs linked lists.",
        review: "Explain why you must save next before changing current.next."
      },
      {
        day: 2,
        title: "Fast and Slow Pointers",
        leetcode: ["Linked List Cycle", "Reorder List"],
        concept: "Use fast/slow pointers to detect cycles and find the middle.",
        design: "Review memory references and object identity.",
        review: "Explain the three phases of Reorder List."
      },
      {
        day: 3,
        title: "Dummy Nodes and Random Pointers",
        leetcode: ["Remove Nth Node From End of List", "Copy List with Random Pointer"],
        concept: "Use dummy nodes for head deletion and HashMap for node cloning.",
        design: "Review object mapping: original node -> copied node.",
        review: "Explain why dummy nodes reduce edge-case branching."
      },
      {
        day: 4,
        title: "Linked List Arithmetic and Cache",
        leetcode: ["Add Two Numbers", "LRU Cache"],
        concept: "Carry arithmetic and combine HashMap with doubly linked list for O(1) cache.",
        design: "Cache eviction policies: LRU, LFU, TTL, and memory limits.",
        review: "Explain LRU get/put operations in O(1)."
      },
      {
        day: 5,
        title: "Object-Oriented Design Intro",
        leetcode: ["Design Linked List", "Review: LRU Cache"],
        concept: "Implement stateful objects and practice class responsibilities.",
        design: "OOD: Parking Lot classes, responsibilities, and relationships.",
        review: "Behavioral: write a Bias for Action story."
      },
      {
        day: 6,
        title: "Month 1 Mock",
        leetcode: ["Mock: 3Sum", "Mock: Product of Array Except Self", "Mock: LRU Cache"],
        concept: "90-minute timed mock across arrays, pointers, and linked structures.",
        design: "Explain one cache design and one API contract.",
        review: "Choose three Month 1 problems for one-week review."
      },
      {
        day: 7,
        title: "Month 1 Recovery",
        leetcode: ["Redo two Month 1 misses"],
        concept: "Consolidate HashMap, sliding window, binary search, and linked list notes.",
        design: "Rest or organize OOD notes.",
        review: "Write Month 1 confidence score and weakest topics."
      }
    ]
  },
  {
    week: 5,
    title: "Binary Tree Fundamentals",
    goal: "Use recursion to return information from subtrees.",
    days: [
      {
        day: 1,
        title: "Tree DFS Basics",
        leetcode: ["Invert Binary Tree", "Maximum Depth of Binary Tree"],
        concept: "Recursive traversal, base cases, and returning subtree answers.",
        design: "Review tree vocabulary: root, leaf, height, depth.",
        review: "Explain the base case for null nodes."
      },
      {
        day: 2,
        title: "Subtree Return Values",
        leetcode: ["Diameter of Binary Tree", "Balanced Binary Tree"],
        concept: "Return height while updating a global or outer answer.",
        design: "Review reliability: how recursive failures propagate.",
        review: "Explain the difference between return value and global answer."
      },
      {
        day: 3,
        title: "Tree Equality",
        leetcode: ["Same Tree", "Subtree of Another Tree"],
        concept: "Compare structure and values recursively.",
        design: "Database indexes and read/write patterns.",
        review: "Explain how subtree matching scans candidate roots."
      },
      {
        day: 4,
        title: "BST and BFS",
        leetcode: ["Lowest Common Ancestor of a BST", "Binary Tree Level Order Traversal"],
        concept: "Use BST ordering and queue-based BFS by level.",
        design: "Review queue semantics and breadth-first processing.",
        review: "Explain DFS vs BFS selection criteria."
      },
      {
        day: 5,
        title: "BST Validation",
        leetcode: ["Validate Binary Search Tree", "Kth Smallest Element in a BST"],
        concept: "Use min/max bounds and inorder traversal properties.",
        design: "Behavioral: write a Learn and Be Curious story.",
        review: "Explain why local child checks are not enough for Validate BST."
      },
      {
        day: 6,
        title: "Tree Mock",
        leetcode: ["Review: Diameter of Binary Tree", "Review: Validate Binary Search Tree"],
        concept: "Timed tree practice with verbal recursion trace.",
        design: "Explain how a queue supports level-order traversal.",
        review: "Write three common recursion mistakes."
      },
      {
        day: 7,
        title: "Recovery and Recursion Notes",
        leetcode: ["Redo two missed tree problems"],
        concept: "Light review of base case, recursive case, return value.",
        design: "Rest or update tree templates.",
        review: "Create a DFS template note."
      }
    ]
  },
  {
    week: 6,
    title: "Advanced Trees and Trie",
    goal: "Build trees, serialize structures, and use Trie for prefix search.",
    days: [
      {
        day: 1,
        title: "Build Tree from Traversals",
        leetcode: ["Construct Binary Tree from Preorder and Inorder Traversal", "Construct Binary Tree from Inorder and Postorder Traversal"],
        concept: "Use traversal order, index maps, and recursion boundaries.",
        design: "Review serialization and reconstruction of structured data.",
        review: "Explain preorder root selection and inorder splitting."
      },
      {
        day: 2,
        title: "Maximum Path Sum",
        leetcode: ["Binary Tree Maximum Path Sum", "Path Sum II"],
        concept: "Separate best path to return from best path seen globally.",
        design: "Review failure isolation: local answer vs global system metric.",
        review: "Explain why negative branches can be ignored."
      },
      {
        day: 3,
        title: "Serialize Tree",
        leetcode: ["Serialize and Deserialize Binary Tree", "Binary Tree Right Side View"],
        concept: "Encode nulls and traversal order so the tree can be rebuilt exactly.",
        design: "Data serialization formats and backward compatibility.",
        review: "Explain why null markers are required."
      },
      {
        day: 4,
        title: "Trie Basics",
        leetcode: ["Implement Trie", "Design Add and Search Words Data Structure"],
        concept: "Use nested nodes for prefix search and wildcard DFS.",
        design: "Review search autocomplete data structures.",
        review: "Explain Trie insert, search, and startsWith."
      },
      {
        day: 5,
        title: "Trie + Backtracking",
        leetcode: ["Word Search II", "Replace Words"],
        concept: "Combine grid DFS with Trie pruning.",
        design: "Design search autocomplete at high level.",
        review: "Explain how Trie pruning reduces unnecessary DFS."
      },
      {
        day: 6,
        title: "Advanced Tree Mock",
        leetcode: ["Review: Binary Tree Maximum Path Sum", "Review: Implement Trie"],
        concept: "Timed practice across advanced recursion and Trie.",
        design: "Explain autocomplete API and data model.",
        review: "Write one tree and one Trie template."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo one tree miss", "Redo one Trie miss"],
        concept: "Light review of recursion boundaries and Trie node state.",
        design: "Rest or update notes.",
        review: "Schedule Word Search II for a one-week revisit."
      }
    ]
  },
  {
    week: 7,
    title: "Heap and Priority Queue",
    goal: "Use priority queues for ranking, scheduling, merging, and streaming median.",
    days: [
      {
        day: 1,
        title: "Heap Basics",
        leetcode: ["Kth Largest Element in an Array", "Last Stone Weight"],
        concept: "Min heap vs max heap and when to keep heap size k.",
        design: "Review priority-based task processing.",
        review: "Explain why a size-k min heap can find kth largest."
      },
      {
        day: 2,
        title: "Distance and Scheduling",
        leetcode: ["K Closest Points to Origin", "Task Scheduler"],
        concept: "Rank by computed key and reason about cooldown intervals.",
        design: "Queue, worker, and async processing basics.",
        review: "Explain heap vs sorting trade-offs."
      },
      {
        day: 3,
        title: "Two Heaps",
        leetcode: ["Find Median from Data Stream", "Sliding Window Median"],
        concept: "Balance lower and upper halves with two heaps.",
        design: "Streaming metrics and real-time aggregation.",
        review: "Explain heap invariants for median."
      },
      {
        day: 4,
        title: "K-Way Merge",
        leetcode: ["Merge K Sorted Lists", "Kth Smallest Element in a Sorted Matrix"],
        concept: "Use heap to repeatedly choose the smallest frontier item.",
        design: "Review merging sorted streams from multiple sources.",
        review: "Explain why heap size is k in merge k lists."
      },
      {
        day: 5,
        title: "Heap Review and Behavioral",
        leetcode: ["Top K Frequent Elements", "Reorganize String"],
        concept: "Revisit frequency ranking with heap and greedy placement.",
        design: "Behavioral: write a Deliver Results story.",
        review: "Compare sorting, heap, and bucket sort for Top K."
      },
      {
        day: 6,
        title: "Heap Mock",
        leetcode: ["Review: Find Median from Data Stream", "Review: Merge K Sorted Lists"],
        concept: "Timed heap mock with invariant explanation.",
        design: "Explain queue + worker failure handling.",
        review: "Write heap operation complexities."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo two missed heap problems"],
        concept: "Light review of heap APIs and comparator logic.",
        design: "Rest or update notes.",
        review: "Create heap pattern cheat sheet."
      }
    ]
  },
  {
    week: 8,
    title: "Graph BFS and DFS",
    goal: "Model grids and graphs, track visited state, and apply topological sort.",
    days: [
      {
        day: 1,
        title: "Grid DFS",
        leetcode: ["Number of Islands", "Max Area of Island"],
        concept: "DFS/BFS on grid, visited marking, and four-direction traversal.",
        design: "Review graph vocabulary: node, edge, component.",
        review: "Explain why each cell is visited at most once."
      },
      {
        day: 2,
        title: "Graph Clone and Multi-Source Reachability",
        leetcode: ["Clone Graph", "Pacific Atlantic Water Flow"],
        concept: "Use map original -> copy and reverse thinking for ocean reachability.",
        design: "Review object identity in graph cloning.",
        review: "Explain visited state in recursive graph DFS."
      },
      {
        day: 3,
        title: "Boundary and Multi-Source BFS",
        leetcode: ["Surrounded Regions", "Rotting Oranges"],
        concept: "Start from boundaries or multiple sources to avoid repeated scans.",
        design: "Review queue-based propagation systems.",
        review: "Explain minute-by-minute BFS levels in Rotting Oranges."
      },
      {
        day: 4,
        title: "Topological Sort",
        leetcode: ["Course Schedule", "Course Schedule II"],
        concept: "Detect cycles and produce ordering with indegree or DFS state.",
        design: "Dependency resolution in build systems and job schedulers.",
        review: "Explain why a cycle makes course completion impossible."
      },
      {
        day: 5,
        title: "Components and Trees",
        leetcode: ["Graph Valid Tree", "Number of Connected Components in an Undirected Graph"],
        concept: "Use DFS/Union-Find thinking for connectivity and cycle checks.",
        design: "Graph traversal in real services: social graph, dependency graph, routing.",
        review: "Explain tree condition: connected and edges = n - 1."
      },
      {
        day: 6,
        title: "Month 2 Mock",
        leetcode: ["Mock: Validate Binary Search Tree", "Mock: Number of Islands", "Mock: Kth Largest Element in an Array"],
        concept: "Timed mix of tree, graph, and heap.",
        design: "Explain graph traversal with queue and visited set.",
        review: "Pick weakest Month 2 category for extra practice."
      },
      {
        day: 7,
        title: "Month 2 Recovery",
        leetcode: ["Redo two Month 2 misses"],
        concept: "Light review of tree recursion, heap invariants, graph visited state.",
        design: "Rest or update diagrams.",
        review: "Write Month 2 confidence score and next-month risks."
      }
    ]
  },
  {
    week: 9,
    title: "Backtracking",
    goal: "Understand decision trees, path state, choices, and pruning.",
    days: [
      {
        day: 1,
        title: "Subsets",
        leetcode: ["Subsets", "Subsets II"],
        concept: "Decision tree, include/exclude choices, and duplicate skipping.",
        design: "Review recursion stack and path mutation.",
        review: "Explain why Subsets II sorts first."
      },
      {
        day: 2,
        title: "Combination Sum",
        leetcode: ["Combination Sum", "Combination Sum II"],
        concept: "Use start index, remaining target, and duplicate control.",
        design: "Review search-space pruning.",
        review: "Explain when an element can be reused."
      },
      {
        day: 3,
        title: "Permutations",
        leetcode: ["Permutations", "Letter Combinations of a Phone Number"],
        concept: "Use used flags or path length to generate arrangements.",
        design: "Review combinatorial explosion and limits.",
        review: "Explain difference between combinations and permutations."
      },
      {
        day: 4,
        title: "Backtracking on Strings and Grid",
        leetcode: ["Word Search", "Palindrome Partitioning"],
        concept: "Mark/unmark visited state and choose valid string cuts.",
        design: "Review DFS pruning in search services.",
        review: "Explain why backtracking must undo state."
      },
      {
        day: 5,
        title: "N-Queens",
        leetcode: ["N-Queens", "Generate Parentheses"],
        concept: "Track columns and diagonals; generate only valid states.",
        design: "System design: API rate limiter overview.",
        review: "Explain pruning sets for N-Queens."
      },
      {
        day: 6,
        title: "Backtracking Mock",
        leetcode: ["Review: Combination Sum", "Review: Word Search"],
        concept: "Timed practice with explicit choices and undo steps.",
        design: "Explain token bucket rate limiting.",
        review: "Write a reusable backtracking template."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo two missed backtracking problems"],
        concept: "Light review of path, choices, base case, pruning.",
        design: "Rest or update notes.",
        review: "Schedule Word Search and N-Queens for revisit."
      }
    ]
  },
  {
    week: 10,
    title: "1D Dynamic Programming",
    goal: "Define state, transition, base cases, and iteration order.",
    days: [
      {
        day: 1,
        title: "Simple 1D DP",
        leetcode: ["Climbing Stairs", "Min Cost Climbing Stairs"],
        concept: "Define dp[i] and derive transition from previous states.",
        design: "Review memoization vs tabulation.",
        review: "Explain dp[i] in plain English before coding."
      },
      {
        day: 2,
        title: "Choose or Skip",
        leetcode: ["House Robber", "House Robber II"],
        concept: "At each house, choose current plus previous safe state or skip current.",
        design: "Review circular constraint handling.",
        review: "Explain why House Robber II splits into two ranges."
      },
      {
        day: 3,
        title: "Palindrome Patterns",
        leetcode: ["Longest Palindromic Substring", "Palindromic Substrings"],
        concept: "Center expansion vs DP table for substring palindromes.",
        design: "Review correctness by invariant.",
        review: "Explain odd and even centers."
      },
      {
        day: 4,
        title: "Counting Ways and Min Coins",
        leetcode: ["Decode Ways", "Coin Change"],
        concept: "Count valid decodings and minimize coins with recurrence.",
        design: "Review invalid state and infinity initialization.",
        review: "Explain transition for Coin Change."
      },
      {
        day: 5,
        title: "State Variants",
        leetcode: ["Maximum Product Subarray", "Word Break"],
        concept: "Track max/min when signs flip; use DP with dictionary lookup.",
        design: "Behavioral: write a failure story with learning.",
        review: "Explain why Maximum Product needs both max and min."
      },
      {
        day: 6,
        title: "1D DP Mock",
        leetcode: ["Review: Coin Change", "Review: Word Break"],
        concept: "Timed DP practice: state, transition, base case before code.",
        design: "Explain memoization cache trade-offs.",
        review: "Write five DP state definitions from memory."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo two missed 1D DP problems"],
        concept: "Light review of recurrence writing.",
        design: "Rest or update DP notes.",
        review: "Make a DP checklist: state, transition, base, order."
      }
    ]
  },
  {
    week: 11,
    title: "2D Dynamic Programming",
    goal: "Build and reason about grid and string DP tables.",
    days: [
      {
        day: 1,
        title: "Grid DP",
        leetcode: ["Unique Paths", "Minimum Path Sum"],
        concept: "Use row/column transitions and initialize borders.",
        design: "Review table dimensions and boundary conditions.",
        review: "Explain dp[r][c] for both problems."
      },
      {
        day: 2,
        title: "String DP",
        leetcode: ["Longest Common Subsequence", "Longest Repeating Subsequence"],
        concept: "Use two indices and compare characters.",
        design: "Review edit-style table interpretation.",
        review: "Explain match vs no-match transitions."
      },
      {
        day: 3,
        title: "Edit Distance",
        leetcode: ["Edit Distance", "Delete Operation for Two Strings"],
        concept: "Model insert, delete, replace operations.",
        design: "Review cost modeling and trade-offs.",
        review: "Explain what each neighboring cell means."
      },
      {
        day: 4,
        title: "Boolean 2D DP",
        leetcode: ["Interleaving String", "Partition Equal Subset Sum"],
        concept: "Use boolean states for feasibility decisions.",
        design: "Review capacity-style DP.",
        review: "Explain why Interleaving String uses two source indices."
      },
      {
        day: 5,
        title: "Hard DP Analysis",
        leetcode: ["Regular Expression Matching", "Wildcard Matching"],
        concept: "Analyze hard DP transitions even if implementation is slow.",
        design: "Consistency, availability, CAP, and trade-offs.",
        review: "Write the transition for star cases."
      },
      {
        day: 6,
        title: "2D DP Review",
        leetcode: ["Review: Longest Common Subsequence", "Review: Edit Distance"],
        concept: "Draw DP tables by hand and explain fill order.",
        design: "Explain strong vs eventual consistency.",
        review: "Write 10 recurrence relations by hand."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo two missed 2D DP problems"],
        concept: "Light review of table initialization.",
        design: "Rest or update notes.",
        review: "Mark which DP problems still feel non-intuitive."
      }
    ]
  },
  {
    week: 12,
    title: "Intervals and Greedy",
    goal: "Sort intervals, choose greedy criteria, and prove local decisions.",
    days: [
      {
        day: 1,
        title: "Merge and Insert Intervals",
        leetcode: ["Merge Intervals", "Insert Interval"],
        concept: "Sort by start and merge overlapping ranges.",
        design: "Review calendar range representation.",
        review: "Explain overlap condition."
      },
      {
        day: 2,
        title: "Meeting and Removal Greedy",
        leetcode: ["Non-overlapping Intervals", "Meeting Rooms"],
        concept: "Sort by end time when minimizing removals.",
        design: "Review scheduling constraints.",
        review: "Explain why earliest end is greedy-safe."
      },
      {
        day: 3,
        title: "Rooms and Arrows",
        leetcode: ["Meeting Rooms II", "Minimum Number of Arrows to Burst Balloons"],
        concept: "Use min heap or sweep line for simultaneous intervals.",
        design: "Review resource allocation and capacity.",
        review: "Explain heap content for Meeting Rooms II."
      },
      {
        day: 4,
        title: "Jump Greedy",
        leetcode: ["Jump Game", "Jump Game II"],
        concept: "Track farthest reach and current jump boundary.",
        design: "Review reachability modeling.",
        review: "Explain why farthest reach is enough."
      },
      {
        day: 5,
        title: "Greedy Partitions",
        leetcode: ["Gas Station", "Partition Labels"],
        concept: "Use cumulative balance and last occurrence boundaries.",
        design: "System design: scheduler or calendar service.",
        review: "Explain restart logic in Gas Station."
      },
      {
        day: 6,
        title: "Month 3 Mock",
        leetcode: ["Mock: Word Search", "Mock: Coin Change", "Mock: Merge Intervals"],
        concept: "Timed mix of backtracking, DP, and intervals.",
        design: "Explain rate limiter plus scheduler concepts.",
        review: "Pick weakest Month 3 pattern."
      },
      {
        day: 7,
        title: "Month 3 Recovery",
        leetcode: ["Redo two Month 3 misses"],
        concept: "Consolidate backtracking, DP, intervals, and greedy.",
        design: "Rest or update recurrence notes.",
        review: "Write Month 3 confidence score."
      }
    ]
  },
  {
    week: 13,
    title: "System Design Foundations",
    goal: "Practice classic scalable designs while keeping coding warm.",
    days: [
      {
        day: 1,
        title: "URL Shortener",
        leetcode: ["Review: Two Sum", "Review: Longest Consecutive Sequence"],
        concept: "Warm-up HashMap and Set patterns.",
        design: "Design URL Shortener: requirements, APIs, data model, cache, redirects.",
        review: "Explain short code generation and collision handling."
      },
      {
        day: 2,
        title: "Rate Limiter",
        leetcode: ["Review: Minimum Window Substring", "Review: Task Scheduler"],
        concept: "Warm-up window and scheduling patterns.",
        design: "Design Rate Limiter: token bucket, leaky bucket, Redis, per-user limits.",
        review: "Explain distributed rate limiting trade-offs."
      },
      {
        day: 3,
        title: "Pastebin",
        leetcode: ["Review: Product of Array Except Self", "Review: Encode and Decode Strings"],
        concept: "Warm-up encoding and array reuse.",
        design: "Design Pastebin: object storage, metadata DB, expiration, access patterns.",
        review: "Explain why blob content and metadata can be stored separately."
      },
      {
        day: 4,
        title: "Notification System",
        leetcode: ["Review: Number of Islands", "Review: Rotting Oranges"],
        concept: "Warm-up BFS propagation thinking.",
        design: "Design Notification System: queue, workers, retries, DLQ, idempotency.",
        review: "Explain retry and duplicate notification prevention."
      },
      {
        day: 5,
        title: "File Upload Service",
        leetcode: ["Review: K Closest Points to Origin", "Review: Merge K Sorted Lists"],
        concept: "Warm-up heap and ranking.",
        design: "Design File Upload Service: multipart upload, object storage, metadata, virus scan.",
        review: "Behavioral: write an Invent and Simplify story."
      },
      {
        day: 6,
        title: "Design Mock",
        leetcode: ["Redo three missed problems from Months 1-3"],
        concept: "Keep coding warm with problem review.",
        design: "45-minute system design mock: URL Shortener or Notification System.",
        review: "Score yourself on requirements, scale, API, data, deep dive, failures, metrics."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Light review: one easy, one medium"],
        concept: "No new coding topic.",
        design: "Rewrite one design answer cleanly.",
        review: "Create system design answer template."
      }
    ]
  },
  {
    week: 14,
    title: "AWS-Style Distributed Systems",
    goal: "Connect design problems to AWS-like primitives and operational concerns.",
    days: [
      {
        day: 1,
        title: "Web Service on AWS",
        leetcode: ["Review: Binary Search", "Review: Valid Anagram"],
        concept: "Light DSA warm-up.",
        design: "Load balancer, autoscaling, health checks, stateless services, multi-AZ.",
        review: "Explain how health checks affect routing."
      },
      {
        day: 2,
        title: "Key-Value Store",
        leetcode: ["Review: Time Based Key-Value Store", "Review: LRU Cache"],
        concept: "Warm-up storage and cache APIs.",
        design: "Design Key-value Store: partitioning, replication, consistency, quorum.",
        review: "Explain consistent hashing and hot partitions."
      },
      {
        day: 3,
        title: "Photo Storage",
        leetcode: ["Review: Group Anagrams", "Review: Top K Frequent Elements"],
        concept: "Warm-up grouping and ranking.",
        design: "Design Photo Storage: object storage, CDN, metadata, thumbnails, permissions.",
        review: "Explain original image vs thumbnail pipeline."
      },
      {
        day: 4,
        title: "Async Job Processing",
        leetcode: ["Review: Course Schedule", "Review: Task Scheduler"],
        concept: "Warm-up dependencies and scheduling.",
        design: "Design async jobs: queue, workers, retries, DLQ, idempotency, visibility timeout.",
        review: "Explain at-least-once delivery and idempotent workers."
      },
      {
        day: 5,
        title: "Metrics Ingestion",
        leetcode: ["Review: Find Median from Data Stream", "Review: Kth Largest Element in an Array"],
        concept: "Warm-up streaming and ranking.",
        design: "Design metrics ingestion: write path, aggregation, retention, dashboards, alerts.",
        review: "Explain high-cardinality metrics risk."
      },
      {
        day: 6,
        title: "Logging System Mock",
        leetcode: ["Review: Number of Connected Components", "Review: Meeting Rooms II"],
        concept: "Timed coding warm-up.",
        design: "Design scalable logging system: ingestion, buffering, indexing, search, retention.",
        review: "Explain backpressure and log loss prevention."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo two design-week coding misses"],
        concept: "Light review only.",
        design: "Rewrite Key-value Store design in 45-minute format.",
        review: "List three AWS-style operational metrics."
      }
    ]
  },
  {
    week: 15,
    title: "Object-Oriented Design",
    goal: "Model classes, responsibilities, state, and extensibility.",
    days: [
      {
        day: 1,
        title: "Parking Lot",
        leetcode: ["Design Parking System", "Review: LRU Cache"],
        concept: "Class responsibilities, entities, and simple state transitions.",
        design: "OOD Parking Lot: Vehicle, Spot, Ticket, Payment, ParkingLot.",
        review: "Explain where pricing logic should live."
      },
      {
        day: 2,
        title: "Elevator System",
        leetcode: ["Review: Min Stack", "Review: Design Linked List"],
        concept: "State machines and scheduling requests.",
        design: "OOD Elevator: Elevator, Request, Controller, Direction, State.",
        review: "Explain internal vs external requests."
      },
      {
        day: 3,
        title: "Library Management",
        leetcode: ["Review: Valid Sudoku", "Review: Copy List with Random Pointer"],
        concept: "Entities, relationships, and lookup maps.",
        design: "OOD Library: Book, Copy, Member, Loan, Catalog, Reservation.",
        review: "Explain difference between Book and BookCopy."
      },
      {
        day: 4,
        title: "Vending Machine",
        leetcode: ["Review: Add Two Numbers", "Review: Reorder List"],
        concept: "State pattern, inventory, payment, and cancellation.",
        design: "OOD Vending Machine: Item, Inventory, Payment, State, Machine.",
        review: "Explain state transitions from idle to dispense."
      },
      {
        day: 5,
        title: "Thread-Safe LRU",
        leetcode: ["LRU Cache", "Design Browser History"],
        concept: "Object design plus concurrency concerns.",
        design: "Discuss locks, atomicity, and race conditions in cache get/put.",
        review: "Behavioral: write Have Backbone; Disagree and Commit story."
      },
      {
        day: 6,
        title: "OOD Mock",
        leetcode: ["Redo two OOD-related design problems"],
        concept: "Timed 60-minute OOD mock.",
        design: "Choose Parking Lot or Elevator and produce class diagram plus methods.",
        review: "Evaluate cohesion, coupling, extensibility, and edge cases."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Light review: one design problem"],
        concept: "No new coding topic.",
        design: "Clean up OOD templates.",
        review: "Write reusable OOD interview framework."
      }
    ]
  },
  {
    week: 16,
    title: "Full System Design Problems",
    goal: "Practice 45-minute end-to-end designs with deep dives.",
    days: [
      {
        day: 1,
        title: "Twitter Feed",
        leetcode: ["Design Twitter", "Review: Merge K Sorted Lists"],
        concept: "Fanout on write vs fanout on read.",
        design: "Design Twitter Feed: follow graph, timeline generation, cache, ranking.",
        review: "Explain celebrity user problem."
      },
      {
        day: 2,
        title: "Instagram or News Feed",
        leetcode: ["Review: Top K Frequent Elements", "Review: K Closest Points to Origin"],
        concept: "Ranking, personalization, and feed freshness.",
        design: "Design News Feed: post storage, fanout, ranking, media metadata.",
        review: "Explain freshness vs relevance trade-off."
      },
      {
        day: 3,
        title: "Video Streaming",
        leetcode: ["Review: Insert Interval", "Review: Meeting Rooms II"],
        concept: "Chunking, CDN, transcoding, and bandwidth.",
        design: "Design YouTube-style streaming: upload, transcode, storage, CDN, playback.",
        review: "Explain adaptive bitrate streaming at high level."
      },
      {
        day: 4,
        title: "Chat System",
        leetcode: ["Review: Course Schedule II", "Review: Clone Graph"],
        concept: "Real-time messaging, delivery guarantees, and presence.",
        design: "Design Chat: WebSocket, message store, fanout, read receipts, offline delivery.",
        review: "Explain ordering and at-least-once delivery."
      },
      {
        day: 5,
        title: "Search Autocomplete",
        leetcode: ["Implement Trie", "Design Search Autocomplete System"],
        concept: "Trie, prefix search, ranking, and hot query cache.",
        design: "Design autocomplete: ingestion, indexing, query serving, ranking, cache.",
        review: "Explain top suggestions update strategy."
      },
      {
        day: 6,
        title: "Design Double Mock",
        leetcode: ["Redo two weak coding problems"],
        concept: "Keep coding warm with weak-topic review.",
        design: "Run two 45-minute mocks: Chat and Video Streaming.",
        review: "Check requirements, bottlenecks, SPOF, consistency, monitoring."
      },
      {
        day: 7,
        title: "Month 4 Recovery",
        leetcode: ["Light review: one medium problem"],
        concept: "No new coding topic.",
        design: "Write final design templates for product, data, queue, cache, metrics.",
        review: "Mark weakest design problem for next week."
      }
    ]
  },
  {
    week: 17,
    title: "Amazon Tagged Coding Focus",
    goal: "Move into interview-speed coding with Amazon-style topics.",
    days: [
      {
        day: 1,
        title: "Amazon Arrays",
        leetcode: ["Reorder Data in Log Files", "Merge Intervals", "Product of Array Except Self"],
        concept: "Arrays, custom sorting, and prefix/suffix review.",
        design: "Light design review: URL Shortener API and data model.",
        review: "Timebox each problem and explain complexity."
      },
      {
        day: 2,
        title: "Amazon Strings and Windows",
        leetcode: ["Minimum Window Substring", "Longest Substring Without Repeating Characters", "Group Anagrams"],
        concept: "String HashMap, window validity, and grouping.",
        design: "Light design review: Rate Limiter algorithm choices.",
        review: "Explain the invariant for each window problem."
      },
      {
        day: 3,
        title: "Amazon Trees",
        leetcode: ["Binary Tree Level Order Traversal", "Lowest Common Ancestor of a Binary Tree", "Serialize and Deserialize Binary Tree"],
        concept: "BFS, DFS, and structure encoding.",
        design: "Light design review: Notification System retries and DLQ.",
        review: "Explain recursion and queue state clearly."
      },
      {
        day: 4,
        title: "Amazon Graphs",
        leetcode: ["Number of Islands", "Rotting Oranges", "Course Schedule"],
        concept: "Grid BFS/DFS and topological sort.",
        design: "Light design review: async job processing.",
        review: "Explain visited state and BFS levels."
      },
      {
        day: 5,
        title: "Amazon DP",
        leetcode: ["Coin Change", "Word Break", "Decode Ways"],
        concept: "1D DP state definitions and transitions.",
        design: "Behavioral: rehearse three STAR stories.",
        review: "Write state, transition, base case for each DP."
      },
      {
        day: 6,
        title: "Coding + Design Mock",
        leetcode: ["Mock: one array", "Mock: one graph", "Mock: one DP"],
        concept: "75-minute coding mock.",
        design: "45-minute system design mock.",
        review: "Score coding communication and design structure."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo three Week 17 misses"],
        concept: "No new topic.",
        design: "Rest or update behavioral stories.",
        review: "Rank weak topics for Week 18."
      }
    ]
  },
  {
    week: 18,
    title: "Weakness Repair",
    goal: "Use mock results to target the highest-risk topics.",
    days: [
      {
        day: 1,
        title: "Weak Topic 1",
        leetcode: ["Choose 3 missed problems from your weakest topic"],
        concept: "Relearn the pattern from notes before solving.",
        design: "Review one design problem related to the weak topic.",
        review: "Write why each old solution failed."
      },
      {
        day: 2,
        title: "Weak Topic 2",
        leetcode: ["Choose 3 missed problems from your second weakest topic"],
        concept: "Practice recognition signals and templates.",
        design: "Review one system design deep dive.",
        review: "Create a one-page pattern summary."
      },
      {
        day: 3,
        title: "DP Repair",
        leetcode: ["House Robber II", "Coin Change", "Longest Common Subsequence"],
        concept: "State, transition, base case, and iteration order.",
        design: "Review consistency and trade-off vocabulary.",
        review: "Explain each recurrence without code."
      },
      {
        day: 4,
        title: "Graph Repair",
        leetcode: ["Pacific Atlantic Water Flow", "Course Schedule II", "Number of Connected Components"],
        concept: "Visited state, BFS/DFS, and graph modeling.",
        design: "Review dependency graph and job scheduling designs.",
        review: "Explain graph representation choices."
      },
      {
        day: 5,
        title: "Binary Search and Heap Repair",
        leetcode: ["Koko Eating Bananas", "Find Median from Data Stream", "Merge K Sorted Lists"],
        concept: "Answer-space search and heap invariants.",
        design: "Review metrics ingestion and streaming aggregation.",
        review: "Write boundary and heap invariant notes."
      },
      {
        day: 6,
        title: "Two Mock Interviews",
        leetcode: ["Mock: one weak problem", "Mock: one random medium"],
        concept: "Simulate interviewer communication.",
        design: "Run a 45-minute design mock and 30-minute behavioral mock.",
        review: "Write final gaps and next-week focus."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo two mock misses"],
        concept: "No new topic.",
        design: "Rest or rehearse STAR stories.",
        review: "Update final interview checklist."
      }
    ]
  },
  {
    week: 19,
    title: "Behavioral and Design Polish",
    goal: "Tighten AWS Leadership Principles and repeat core designs.",
    days: [
      {
        day: 1,
        title: "Leadership Principles",
        leetcode: ["One easy warm-up: Two Sum", "One medium warm-up: Group Anagrams"],
        concept: "Keep coding light and accurate.",
        design: "Review all Leadership Principles and map 8 STAR stories.",
        review: "Prepare two-minute versions of each story."
      },
      {
        day: 2,
        title: "URL Shortener Repeat",
        leetcode: ["Review: LRU Cache", "Review: Time Based Key-Value Store"],
        concept: "Warm-up storage and cache concepts.",
        design: "Redo URL Shortener in 45 minutes with scale estimates.",
        review: "Add monitoring and failure handling."
      },
      {
        day: 3,
        title: "Notification System Repeat",
        leetcode: ["Review: Rotting Oranges", "Review: Task Scheduler"],
        concept: "Warm-up queues and propagation.",
        design: "Redo Notification System with retries, DLQ, and idempotency.",
        review: "Explain duplicate prevention clearly."
      },
      {
        day: 4,
        title: "Key-Value Store Repeat",
        leetcode: ["Review: Koko Eating Bananas", "Review: Course Schedule"],
        concept: "Warm-up partitioning and dependency thinking.",
        design: "Redo Key-value Store with sharding, replication, consistency.",
        review: "Explain quorum and eventual consistency."
      },
      {
        day: 5,
        title: "Behavioral Mock",
        leetcode: ["One random medium problem"],
        concept: "Keep coding warm.",
        design: "Record answers to 10 behavioral questions.",
        review: "Trim vague answers and add concrete metrics."
      },
      {
        day: 6,
        title: "Full Mock",
        leetcode: ["Mock: one medium coding problem"],
        concept: "60-minute coding mock with explanation.",
        design: "45-minute design mock plus 30-minute behavioral mock.",
        review: "Score final readiness across coding, design, behavioral."
      },
      {
        day: 7,
        title: "Recovery",
        leetcode: ["Redo one missed mock problem"],
        concept: "No new topic.",
        design: "Rest or light STAR rehearsal.",
        review: "Choose final Week 20 review list."
      }
    ]
  },
  {
    week: 20,
    title: "Final Interview Readiness",
    goal: "Review, reduce mistakes, and protect confidence.",
    days: [
      {
        day: 1,
        title: "Blind 75 Misses",
        leetcode: ["Redo 5 previously missed Blind 75 problems"],
        concept: "Focus on known mistakes, not new topics.",
        design: "Review design framework once.",
        review: "Write the mistake pattern for each miss."
      },
      {
        day: 2,
        title: "Amazon Medium Set",
        leetcode: ["Reorder Data in Log Files", "LRU Cache", "Number of Islands"],
        concept: "Common Amazon-style coding mix.",
        design: "Review one AWS-style distributed system.",
        review: "Practice final interview explanations."
      },
      {
        day: 3,
        title: "Random System Design",
        leetcode: ["One easy warm-up", "One medium weak-topic problem"],
        concept: "Warm up without burning out.",
        design: "Pick one random design and speak for 45 minutes.",
        review: "Check requirements, scale, APIs, data, deep dives, failures, metrics."
      },
      {
        day: 4,
        title: "Behavioral Compression",
        leetcode: ["One familiar medium problem"],
        concept: "Keep coding muscle active.",
        design: "Compress each STAR story into a two-minute answer.",
        review: "Make sure each story includes action and result."
      },
      {
        day: 5,
        title: "Final Full Mock",
        leetcode: ["Mock: one medium coding problem"],
        concept: "Simulate interview pacing and verbal clarity.",
        design: "Full mock: coding, design, behavioral.",
        review: "Only fix high-impact issues after this mock."
      },
      {
        day: 6,
        title: "Light Review",
        leetcode: ["Review code templates only: HashMap, BFS, DFS, DP, heap"],
        concept: "No new hard problems. Review templates and mistake log.",
        design: "Review system design answer template and key metrics.",
        review: "Sleep, reset, and avoid late-night new material."
      },
      {
        day: 7,
        title: "Rest and Confidence",
        leetcode: ["No new problems"],
        concept: "Light flashcards only if needed.",
        design: "Skim STAR story headlines and design framework.",
        review: "Prepare environment, resume notes, and calm interview routine."
      }
    ]
  }
];

function createList(items) {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function createDayBlock(title, content) {
  const block = document.createElement("div");
  block.className = "day-block";

  const heading = document.createElement("h4");
  heading.textContent = title;
  block.appendChild(heading);

  if (Array.isArray(content)) {
    block.appendChild(createList(content));
  } else {
    const p = document.createElement("p");
    p.textContent = content;
    block.appendChild(p);
  }

  return block;
}

function renderRoadmapDailyPlan() {
  const root = document.getElementById("roadmapDailyPlan");
  if (!root) return;

  roadmapWeeks.forEach((week) => {
    const weekDetails = document.createElement("details");
    weekDetails.className = "week-details";
    if (week.week === 1) weekDetails.open = true;

    const weekSummary = document.createElement("summary");
    const weekSummaryMain = document.createElement("span");
    weekSummaryMain.className = "week-summary-main";
    weekSummaryMain.innerHTML = `<strong>Week ${week.week}: ${week.title}</strong><span>${week.goal}</span>`;
    weekSummary.appendChild(weekSummaryMain);
    weekDetails.appendChild(weekSummary);

    const weekBody = document.createElement("div");
    weekBody.className = "week-body";

    week.days.forEach((day) => {
      const dayDetails = document.createElement("details");
      dayDetails.className = "day-details";

      const daySummary = document.createElement("summary");
      const daySummaryMain = document.createElement("span");
      daySummaryMain.className = "day-summary-main";
      daySummaryMain.innerHTML = `<strong>Day ${day.day}: ${day.title}</strong><span>${day.leetcode.join(", ")}</span>`;
      daySummary.appendChild(daySummaryMain);
      dayDetails.appendChild(daySummary);

      const dayBody = document.createElement("div");
      dayBody.className = "day-body";
      dayBody.appendChild(createDayBlock("LeetCode", day.leetcode));
      dayBody.appendChild(createDayBlock("Concept Focus", day.concept));
      dayBody.appendChild(createDayBlock("Design / Behavioral", day.design));
      dayBody.appendChild(createDayBlock("Review Target", day.review));

      dayDetails.appendChild(dayBody);
      weekBody.appendChild(dayDetails);
    });

    weekDetails.appendChild(weekBody);
    root.appendChild(weekDetails);
  });
}

renderRoadmapDailyPlan();
