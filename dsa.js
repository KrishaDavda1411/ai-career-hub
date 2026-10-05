const dsaQuestions = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "arrays",
    topic: "Array · Hash Map",
    description: "Given an integer array nums and a target, return the indices of two numbers whose values add up to the target. Exactly one valid answer exists.",
    example: "Input: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1]\nExplanation: nums[0] + nums[1] = 9",
    constraints: ["2 ≤ nums.length ≤ 10⁴", "Exactly one solution exists", "Do not reuse the same element"],
    focus: "Recognizing when stored lookup state can replace a nested search.",
    hint: "While scanning, store each value and ask whether its complement has already appeared.",
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
    pattern: "One-pass hash map",
    signals: ["map", "dict", "hash", "seen"]
  },
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "arrays",
    topic: "String · Sliding Window",
    description: "Given a string s, return the length of its longest substring containing no repeated characters.",
    example: "Input: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\".",
    constraints: ["0 ≤ s.length ≤ 5 × 10⁴", "s can contain letters, digits, symbols, and spaces"],
    focus: "Maintaining a valid window while avoiding repeated work.",
    hint: "Move the left pointer only when the right pointer introduces a duplicate.",
    optimalTime: "O(n)",
    optimalSpace: "O(min(n, alphabet))",
    pattern: "Sliding window + set",
    signals: ["set", "map", "left", "right"]
  },
  {
    id: "product-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "arrays",
    topic: "Array · Prefix / Suffix",
    description: "Return an array where answer[i] is the product of every number in nums except nums[i]. Solve without division.",
    example: "Input: nums = [1, 2, 3, 4]\nOutput: [24, 12, 8, 6]",
    constraints: ["2 ≤ nums.length ≤ 10⁵", "Do not use division", "Aim for constant auxiliary space"],
    focus: "Combining prefix and suffix information without quadratic work.",
    hint: "Store prefix products first, then walk backward with a running suffix product.",
    optimalTime: "O(n)",
    optimalSpace: "O(1) auxiliary",
    pattern: "Prefix and suffix products",
    signals: ["prefix", "suffix", "product"]
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "arrays",
    topic: "Intervals · Sorting",
    description: "Given intervals [start, end], merge every overlapping interval and return the non-overlapping result.",
    example: "Input: [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]",
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "0 ≤ start ≤ end ≤ 10⁴"],
    focus: "Creating a useful invariant after sorting and merging in one sweep.",
    hint: "Sort by start time and compare only with the last interval already merged.",
    optimalTime: "O(n log n)",
    optimalSpace: "O(n)",
    pattern: "Sort then sweep",
    signals: ["sort", "sorted", "merged", "interval"]
  },
  {
    id: "search-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "arrays",
    topic: "Array · Binary Search",
    description: "Search for target in a sorted array rotated at an unknown pivot. Return its index, or -1 if it is absent.",
    example: "Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
    constraints: ["All values are unique", "1 ≤ nums.length ≤ 5000", "Required runtime: O(log n)"],
    focus: "Preserving binary-search elimination when only one half is normally sorted.",
    hint: "At every midpoint, one side is guaranteed to be sorted.",
    optimalTime: "O(log n)",
    optimalSpace: "O(1)",
    pattern: "Modified binary search",
    signals: ["left", "right", "mid", "while"]
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "arrays",
    topic: "Array · Two Pointers",
    description: "Given non-negative bar heights, compute how much rain water can be trapped after raining.",
    example: "Input: [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6",
    constraints: ["1 ≤ height.length ≤ 2 × 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    focus: "Proving which side can be finalized from the smaller running boundary.",
    hint: "The smaller boundary determines the water level that is safe to calculate next.",
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
    pattern: "Two pointers",
    signals: ["left", "right", "leftmax", "rightmax"]
  },
  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "graphs",
    topic: "Graph · DFS / BFS",
    description: "Given a grid of land '1' and water '0', return the number of connected islands. Cells connect vertically and horizontally.",
    example: "Input:\n[[\"1\",\"1\",\"0\"],\n [\"1\",\"0\",\"0\"],\n [\"0\",\"0\",\"1\"]]\nOutput: 2",
    constraints: ["1 ≤ rows, columns ≤ 300", "Visit each land cell at most once"],
    focus: "Modeling a matrix as a graph and marking visited state.",
    hint: "Every unvisited land cell starts one traversal and therefore one new island.",
    optimalTime: "O(m · n)",
    optimalSpace: "O(m · n)",
    pattern: "Grid traversal",
    signals: ["dfs", "bfs", "queue", "visited"]
  },
  {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "graphs",
    topic: "Graph · Topological Sort",
    description: "Given course prerequisites, determine whether every course can be completed.",
    example: "Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: true",
    constraints: ["1 ≤ numCourses ≤ 2000", "Prerequisites form a directed graph"],
    focus: "Detecting cycles using indegrees or three-state DFS.",
    hint: "If a topological traversal processes fewer than all nodes, a cycle exists.",
    optimalTime: "O(V + E)",
    optimalSpace: "O(V + E)",
    pattern: "Topological sort",
    signals: ["indegree", "queue", "graph", "visited"]
  },
  {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "graphs",
    topic: "Graph · Hash Map",
    description: "Return a deep copy of a connected undirected graph whose nodes contain values and neighbor lists.",
    example: "Input: adjacency list [[2,4],[1,3],[2,4],[1,3]]\nOutput: A structurally identical graph using new nodes",
    constraints: ["At most 100 nodes", "Node values are unique", "No cloned node may share a reference"],
    focus: "Combining graph traversal with an old-node to new-node mapping.",
    hint: "Create a node's clone before traversing its neighbors so cycles cannot duplicate it.",
    optimalTime: "O(V + E)",
    optimalSpace: "O(V)",
    pattern: "Traversal + clone map",
    signals: ["map", "dict", "queue", "dfs"]
  },
  {
    id: "level-order",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "trees",
    topic: "Tree · BFS",
    description: "Return the node values of a binary tree level by level, from left to right.",
    example: "Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]",
    constraints: ["0 ≤ number of nodes ≤ 2000", "Preserve nodes by depth"],
    focus: "Separating BFS levels using the queue size at each iteration.",
    hint: "Capture the queue length before processing each level.",
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
    pattern: "Breadth-first search",
    signals: ["queue", "deque", "level"]
  },
  {
    id: "lowest-common-ancestor",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    category: "trees",
    topic: "Tree · Recursion",
    description: "Given a binary tree and nodes p and q, return their lowest common ancestor.",
    example: "Input: root = [3,5,1,6,2,0,8], p = 5, q = 1\nOutput: 3",
    constraints: ["All node values are unique", "p and q both exist in the tree"],
    focus: "Using recursive return values to propagate partial discoveries.",
    hint: "If left and right both return a node, the current root is the split point.",
    optimalTime: "O(n)",
    optimalSpace: "O(h)",
    pattern: "Postorder recursion",
    signals: ["left", "right", "return", "root"]
  },
  {
    id: "validate-bst",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "trees",
    topic: "Tree · DFS",
    description: "Determine whether a binary tree satisfies the strict binary-search-tree ordering property.",
    example: "Input: root = [5,1,4,null,null,3,6]\nOutput: false",
    constraints: ["Values fit in 32-bit integers", "Every left value must be strictly smaller"],
    focus: "Passing valid ranges through recursion rather than comparing only with a parent.",
    hint: "Each recursive call should narrow both a lower and an upper bound.",
    optimalTime: "O(n)",
    optimalSpace: "O(h)",
    pattern: "DFS with bounds",
    signals: ["lower", "upper", "min", "max"]
  },
  {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "dynamic-programming",
    topic: "Dynamic Programming",
    description: "Given coin denominations and an amount, return the fewest coins required, or -1 if the amount cannot be formed.",
    example: "Input: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 5 + 5 + 1",
    constraints: ["1 ≤ coins.length ≤ 12", "0 ≤ amount ≤ 10⁴"],
    focus: "Defining reusable state and building answers from smaller amounts.",
    hint: "Let dp[x] be the minimum coins needed to form amount x.",
    optimalTime: "O(amount · coins)",
    optimalSpace: "O(amount)",
    pattern: "Bottom-up dynamic programming",
    signals: ["dp", "amount", "coin"]
  },
  {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "dynamic-programming",
    topic: "Dynamic Programming · String",
    description: "Determine whether a string can be segmented into a sequence of dictionary words.",
    example: "Input: s = \"leetcode\", wordDict = [\"leet\",\"code\"]\nOutput: true",
    constraints: ["1 ≤ s.length ≤ 300", "Dictionary words are unique"],
    focus: "Choosing state boundaries and reusing valid prefixes.",
    hint: "dp[i] can mean the prefix ending before index i can be segmented.",
    optimalTime: "O(n²)",
    optimalSpace: "O(n)",
    pattern: "Prefix dynamic programming",
    signals: ["dp", "set", "substring", "slice"]
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    category: "arrays",
    topic: "Design · Hash Map · Linked List",
    description: "Design an LRU cache supporting get and put in O(1) average time while evicting the least recently used key.",
    example: "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3)\nKey 2 is evicted.",
    constraints: ["1 ≤ capacity ≤ 3000", "get and put must average O(1)"],
    focus: "Combining two data structures to satisfy lookup and ordering requirements.",
    hint: "A map finds nodes in O(1); a doubly linked list updates recency in O(1).",
    optimalTime: "O(1) per operation",
    optimalSpace: "O(capacity)",
    pattern: "Hash map + doubly linked list",
    signals: ["map", "dict", "prev", "next", "head", "tail"]
  }
];

const dsaState = {
  initialized: false,
  activePattern: "all",
  query: "",
  currentQuestion: null,
  language: "python",
  timerSeconds: 45 * 60,
  timerRunning: false,
  timerHandle: null,
  sessionStarted: false,
  practiceMode: false,
  currentPhase: "understand",
  practiced: new Set(JSON.parse(localStorage.getItem("signal-dsa-practiced") || "[]")),
  submissions: JSON.parse(localStorage.getItem("signal-dsa-submissions") || "[]"),
  lastRun: null
};

const dsaElements = {
  editor: document.querySelector("#code-editor"),
  launch: document.querySelector("#interview-launch"),
  messages: document.querySelector("#interview-messages"),
  testResults: document.querySelector("#test-results"),
  analysisPanel: document.querySelector("#analysis-panel"),
  analysisPlaceholder: document.querySelector("#analysis-placeholder")
};

let dsaEditorInstance = null;
let dsaAutocompleteTimer = null;

function getDsaCode() {
  return dsaEditorInstance ? dsaEditorInstance.getValue() : dsaElements.editor.value;
}

function setDsaCode(value) {
  if (dsaEditorInstance) dsaEditorInstance.setValue(value);
  else dsaElements.editor.value = value;
}

function focusDsaEditor() {
  if (dsaEditorInstance) dsaEditorInstance.focus();
  else dsaElements.editor.focus();
}

function codeMirrorMode(language) {
  if (language === "java") return "text/x-java";
  if (language === "javascript") return "javascript";
  return { name: "python", version: 3 };
}

function dsaCompletionHint(editor) {
  const cursor = editor.getCursor();
  const token = editor.getTokenAt(cursor);
  const start = token.start;
  const word = token.string.slice(0, cursor.ch - start);
  const spec = window.DsaRunner && dsaState.currentQuestion
    ? window.DsaRunner.specs[dsaState.currentQuestion.id]
    : null;
  const params = spec ? spec.params.map(([name]) => name) : [];
  const languageWords = {
    python: ["append", "deque", "defaultdict", "enumerate", "range", "len", "set", "dict", "sorted", "min", "max", "return", "while", "for", "if", "else"],
    java: ["ArrayList", "HashMap", "HashSet", "ArrayDeque", "Arrays", "Collections", "put", "get", "containsKey", "add", "remove", "size", "return", "while", "for", "if", "else"],
    javascript: ["Map", "Set", "Array", "push", "pop", "shift", "unshift", "has", "get", "set", "length", "sort", "return", "while", "for", "if", "else"]
  }[dsaState.language];
  const list = [...new Set([...params, ...languageWords])]
    .filter((item) => !word || item.toLowerCase().startsWith(word.toLowerCase()))
    .sort();
  return {
    list,
    from: window.CodeMirror.Pos(cursor.line, start),
    to: window.CodeMirror.Pos(cursor.line, cursor.ch)
  };
}

function initializeCodeMirror() {
  if (dsaEditorInstance || !window.CodeMirror) return;
  dsaEditorInstance = window.CodeMirror.fromTextArea(dsaElements.editor, {
    mode: codeMirrorMode(dsaState.language),
    theme: "material-darker",
    lineNumbers: true,
    lineWrapping: false,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    autoCloseBrackets: true,
    matchBrackets: true,
    styleActiveLine: true,
    extraKeys: {
      "Ctrl-Space": (editor) => editor.showHint({ hint: dsaCompletionHint, completeSingle: false }),
      "Ctrl-Enter": () => runDsaChecks(),
      "Cmd-Enter": () => runDsaChecks(),
      "Shift-Ctrl-Enter": () => analyzeDsaSolution(),
      "Shift-Cmd-Enter": () => analyzeDsaSolution()
    }
  });
  dsaEditorInstance.setSize("100%", 520);
  dsaEditorInstance.on("change", (editor, change) => {
    updateDsaLineCount();
    if (dsaState.sessionStarted && meaningfulDsaLines(editor.getValue()).length >= 1) {
      setInterviewPhase("code");
      document.querySelector("#interviewer-state").textContent = "Listening to your approach";
    }
    if (change.origin === "+input") {
      window.clearTimeout(dsaAutocompleteTimer);
      dsaAutocompleteTimer = window.setTimeout(() => {
        const token = editor.getTokenAt(editor.getCursor()).string;
        if (token.length >= 2 && !editor.state.completionActive) {
          editor.showHint({ hint: dsaCompletionHint, completeSingle: false });
        }
      }, 180);
    }
  });
  dsaEditorInstance.on("cursorActivity", updateCursorPosition);
}

function dsaStarterCode(question, language) {
  if (window.DsaRunner && window.DsaRunner.starterCode) {
    return window.DsaRunner.starterCode(question.id, language);
  }
  const camelName = question.id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  if (language === "java") {
    return `class Solution {\n    public Object ${camelName}(Object input) {\n        // Explain your approach before coding.\n        \n        return null;\n    }\n}`;
  }
  if (language === "javascript") {
    return `function ${camelName}(input) {\n  // Explain your approach before coding.\n  \n  return null;\n}`;
  }
  return `class Solution:\n    def ${question.id.replace(/-/g, "_")}(self, input):\n        # Explain your approach before coding.\n        \n        pass`;
}

function updateEditorLanguageChrome() {
  const labels = {
    python: { file: "solution.py", name: "Python" },
    java: { file: "Solution.java", name: "Java" },
    javascript: { file: "solution.js", name: "JavaScript" }
  };
  document.querySelector("#editor-filename").textContent = labels[dsaState.language].file;
  document.querySelector("#language-status").textContent = labels[dsaState.language].name;
}

function updateDsaLineCount() {
  const count = getDsaCode().split("\n").length;
  document.querySelector("#code-lines").textContent = `${count} ${count === 1 ? "line" : "lines"}`;
  updateCursorPosition();
}

function updateCursorPosition() {
  if (dsaEditorInstance) {
    const cursor = dsaEditorInstance.getCursor();
    document.querySelector("#cursor-position").textContent = `Ln ${cursor.line + 1}, Col ${cursor.ch + 1}`;
    return;
  }
  const beforeCursor = dsaElements.editor.value.slice(0, dsaElements.editor.selectionStart);
  const lines = beforeCursor.split("\n");
  document.querySelector("#cursor-position").textContent = `Ln ${lines.length}, Col ${lines[lines.length - 1].length + 1}`;
}

function setInterviewPhase(phase) {
  const order = ["understand", "plan", "code", "test"];
  dsaState.currentPhase = phase;
  const currentIndex = order.indexOf(phase);
  document.querySelectorAll("#phase-steps [data-phase]").forEach((step) => {
    const index = order.indexOf(step.dataset.phase);
    step.classList.toggle("active", index === currentIndex);
    step.classList.toggle("complete", index < currentIndex);
  });
}

function resetInterviewMessages() {
  dsaElements.messages.innerHTML = `
    <div class="interview-message bot">
      <span>AI</span>
      <p>Start the session when you’re ready. I’ll answer clarifying questions, but I won’t reveal the approach unless you ask for a hint.</p>
    </div>
  `;
  document.querySelector("#interviewer-state").textContent = "Waiting to begin";
}

function addInterviewMessage(author, message) {
  const isUser = author === "user";
  const wrapper = document.createElement("div");
  wrapper.className = `interview-message ${isUser ? "user" : "bot"}`;
  wrapper.innerHTML = `<span>${isUser ? "You" : "AI"}</span><p></p>`;
  wrapper.querySelector("p").textContent = message;
  dsaElements.messages.appendChild(wrapper);
  dsaElements.messages.scrollTop = dsaElements.messages.scrollHeight;
}

function beginInterview(practiceMode = false) {
  dsaState.sessionStarted = true;
  dsaState.practiceMode = practiceMode;
  dsaElements.launch.classList.add("hidden");
  setInterviewPhase("understand");

  const status = document.querySelector("#session-status");
  status.className = "session-status live";
  status.innerHTML = `<i></i> ${practiceMode ? "Practice session" : "Interview in progress"}`;
  document.querySelector("#interviewer-state").textContent = practiceMode ? "Practice mode" : "Interview in progress";
  addInterviewMessage(
    "bot",
    `Let’s begin with ${dsaState.currentQuestion.title}. Before coding, explain the brute-force approach and then tell me what you would optimize.`
  );

  if (!practiceMode && !dsaState.timerRunning) toggleDsaTimer();
  focusDsaEditor();
}

function ensureInterviewStarted() {
  if (dsaState.sessionStarted) return true;
  showToast("Start the interview or choose practice mode first");
  return false;
}

function handleInterviewerPrompt(type) {
  if (!ensureInterviewStarted()) return;
  const question = dsaState.currentQuestion;

  if (type === "clarify") {
    addInterviewMessage("user", "Can I clarify the constraints and expected output?");
    addInterviewMessage("bot", `Yes. ${question.constraints.join(" ")} Return exactly the output format shown in the example.`);
    setInterviewPhase("understand");
  } else if (type === "edge") {
    addInterviewMessage("user", "Which edge cases should I think about?");
    addInterviewMessage("bot", "I’d like you to propose them first. Consider the smallest valid input, boundary values, duplicates or missing values, and whether the input can be empty.");
    setInterviewPhase("test");
  } else {
    addInterviewMessage("user", "May I have one small hint?");
    addInterviewMessage("bot", question.hint);
    document.querySelector("#question-hint").textContent = question.hint;
    document.querySelector("#question-hint").classList.remove("hidden");
    document.querySelector("#hint-button span").textContent = "Hide hint";
    setInterviewPhase("plan");
  }
}

function resetDsaTimer() {
  window.clearInterval(dsaState.timerHandle);
  dsaState.timerRunning = false;
  dsaState.timerSeconds = 45 * 60;
  document.querySelector("#timer-toggle").textContent = "Start";
  document.querySelector("#interview-timer").classList.remove("running", "warning");
  renderDsaTimer();
}

function renderDsaTimer() {
  const minutes = Math.floor(dsaState.timerSeconds / 60);
  const seconds = dsaState.timerSeconds % 60;
  document.querySelector("#timer-display").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.querySelector("#interview-timer").classList.toggle("warning", dsaState.timerSeconds <= 5 * 60);
}

function toggleDsaTimer() {
  dsaState.timerRunning = !dsaState.timerRunning;
  const timer = document.querySelector("#interview-timer");
  const button = document.querySelector("#timer-toggle");
  timer.classList.toggle("running", dsaState.timerRunning);
  button.textContent = dsaState.timerRunning ? "Pause" : "Start";
  window.clearInterval(dsaState.timerHandle);

  if (dsaState.timerRunning) {
    dsaState.timerHandle = window.setInterval(() => {
      dsaState.timerSeconds = Math.max(0, dsaState.timerSeconds - 1);
      renderDsaTimer();
      if (dsaState.timerSeconds === 0) {
        dsaState.timerRunning = false;
        window.clearInterval(dsaState.timerHandle);
        button.textContent = "Start";
        timer.classList.remove("running");
        showToast("Interview time is up");
      }
    }, 1000);
  }
}

function dsaEligibleQuestions() {
  const query = dsaState.query.toLowerCase().trim();
  return dsaQuestions.filter((question) => {
    const topicMatch = dsaState.activePattern === "all" || question.category === dsaState.activePattern;
    const searchMatch = !query || `${question.title} ${question.topic} ${question.pattern}`.toLowerCase().includes(query);
    return topicMatch && searchMatch;
  });
}

function renderDsaQuestion(question) {
  dsaState.currentQuestion = question;
  dsaState.sessionStarted = false;
  dsaState.practiceMode = false;
  document.querySelector("#question-position").textContent = String(dsaQuestions.indexOf(question) + 1).padStart(2, "0");

  const difficulty = document.querySelector("#question-difficulty");
  difficulty.textContent = question.difficulty;
  difficulty.className = `difficulty-badge ${question.difficulty.toLowerCase()}`;

  document.querySelector("#question-topic").textContent = question.topic;
  document.querySelector("#question-title").textContent = question.title;
  document.querySelector("#question-description").textContent = question.description;
  document.querySelector("#question-contract").textContent = dsaFunctionContract(question.id, dsaState.language);
  document.querySelector("#question-example").textContent = question.example;
  document.querySelector("#question-constraints").innerHTML = question.constraints.map((constraint) => `<li>${constraint}</li>`).join("");
  document.querySelector("#interview-focus").textContent = question.focus;
  document.querySelector("#question-hint").textContent = question.hint;
  document.querySelector("#question-hint").classList.add("hidden");
  document.querySelector("#hint-button span").textContent = "Show one hint";

  setDsaCode(dsaStarterCode(question, dsaState.language));
  updateEditorLanguageChrome();
  updateDsaLineCount();
  dsaElements.launch.classList.remove("hidden");
  resetInterviewMessages();
  setInterviewPhase("understand");
  document.querySelector("#session-status").className = "session-status";
  document.querySelector("#session-status").innerHTML = "<i></i> Not started";
  dsaElements.testResults.classList.add("hidden");
  document.querySelector("#test-case-list").innerHTML = "";
  dsaElements.analysisPanel.classList.add("hidden");
  dsaElements.analysisPlaceholder.classList.remove("hidden");
  resetDsaTimer();
}

function dsaFunctionContract(problemId, language) {
  const spec = window.DsaRunner && window.DsaRunner.specs[problemId];
  if (!spec) return "Use the provided function signature.";
  if (spec.kind === "lru") {
    if (language === "python") return "class LRUCache: __init__(capacity), get(key), put(key, value)";
    if (language === "java") return "class LRUCache { LRUCache(int capacity); int get(int key); void put(int key, int value); }";
    return "class LRUCache { constructor(capacity); get(key); put(key, value); }";
  }
  const names = spec.params.map(([name]) => name).join(", ");
  if (language === "python") return `Solution.${spec.pyMethod}(self, ${names})`;
  if (language === "java") return `Solution.${spec.method}(${names})`;
  return `${spec.method}(${names})`;
}

function formatDsaTestInput(questionId, args) {
  const spec = window.DsaRunner && window.DsaRunner.specs[questionId];
  if (!spec || !args) return "Input unavailable";
  if (spec.kind === "lru") {
    return `capacity = ${formatRunValue(args[0])}, operations = ${formatRunValue(args[1])}`;
  }
  return spec.params.map(([name], index) => `${name} = ${formatRunValue(args[index])}`).join(", ");
}

function renderDsaTestCases(cases, questionId) {
  return cases.map((test, index) => `
    <article class="test-case ${test.passed ? "pass" : "fail"}">
      <div class="test-case-heading">
        <i>${test.passed ? "✓" : "×"}</i>
        <strong>Test case ${index + 1}</strong>
        <b>${test.passed ? "Passed" : "Failed"}</b>
      </div>
      <dl>
        <div><dt>Input</dt><dd>${formatDsaTestInput(questionId, test.input)}</dd></div>
        <div><dt>Expected</dt><dd>${formatRunValue(test.expected)}</dd></div>
        <div><dt>Your output</dt><dd>${test.error ? test.error : formatRunValue(test.actual)}</dd></div>
      </dl>
    </article>
  `).join("");
}

function chooseRandomDsaQuestion() {
  const pool = dsaEligibleQuestions();
  if (!pool.length) {
    showToast("No questions match that filter");
    return;
  }
  const currentId = dsaState.currentQuestion ? dsaState.currentQuestion.id : null;
  const alternatives = pool.filter((question) => question.id !== currentId);
  const choices = alternatives.length ? alternatives : pool;
  renderDsaQuestion(choices[Math.floor(Math.random() * choices.length)]);
}

function estimateDsaComplexity(code) {
  const normalized = code.toLowerCase();
  const loops = normalized.match(/\b(for|while)\b/g) || [];
  const hasNestedLoop = /(?:for|while)[\s\S]{0,260}(?:for|while)/.test(normalized) && loops.length >= 2;
  const hasSort = /\.sort\(|sorted\(|collections\.sort|arrays\.sort/.test(normalized);
  const hasBinarySearch = /\bmid\b/.test(normalized) && /\bleft\b/.test(normalized) && /\bright\b/.test(normalized);
  const functionName = dsaState.currentQuestion.id.replace(/-/g, "_");
  const hasRecursion = normalized.split(functionName).length > 2;
  const hasHash = /\b(map|set|dict|hashmap|hashset|dictionary|seen)\b/.test(normalized);
  const hasGrid = /\b(grid|matrix|rows|cols|columns)\b/.test(normalized);

  let time = "O(1)";
  if (hasRecursion && hasNestedLoop) time = "O(2ⁿ)";
  else if (hasNestedLoop && hasGrid) time = "O(m · n)";
  else if (hasNestedLoop) time = "O(n²)";
  else if (hasSort) time = "O(n log n)";
  else if (hasBinarySearch) time = "O(log n)";
  else if (loops.length || hasHash || hasRecursion) time = "O(n)";

  let space = "O(1)";
  if (/\b(dp|queue|stack|visited|map|set|dict|hashmap|hashset|result|output|seen)\b/.test(normalized)) space = "O(n)";
  if (hasGrid && /\bvisited\b/.test(normalized)) space = "O(m · n)";
  if (hasRecursion && space === "O(1)") space = "O(h)";

  return { time, space, hasNestedLoop, hasSort, hasHash };
}

function dsaComplexityRank(value) {
  if (value.includes("2ⁿ")) return 7;
  if (value.includes("n²")) return 6;
  if (value.includes("n log n")) return 5;
  if (value.includes("m · n") || value.includes("V + E") || value.includes("amount")) return 4;
  if (value === "O(n)" || value.includes("O(h)") || value.includes("capacity")) return 3;
  if (value.includes("log n")) return 2;
  return 1;
}

function meaningfulDsaLines(code) {
  return code.split("\n").filter((line) => {
    const trimmed = line.trim();
    return trimmed
      && !/^(#|\/\/|\/\*|\*|class |def |function |public |return null|pass|\{|\})/.test(trimmed);
  });
}

async function runDsaChecks() {
  if (!ensureInterviewStarted()) return;
  const code = getDsaCode();
  if (meaningfulDsaLines(code).length < 2) {
    showToast("Write more of the solution before running");
    focusDsaEditor();
    return;
  }

  const runButton = document.querySelector("#run-tests");
  const runLabel = runButton.querySelector("span");
  runButton.classList.add("loading");
  runButton.disabled = true;
  runLabel.textContent = "Running…";
  dsaElements.testResults.classList.remove("hidden");
  document.querySelector("#test-results-title").textContent = "Executing hidden test cases…";
  document.querySelector("#test-case-list").innerHTML = `
    <div class="runner-loading"><i></i><span>Compiling and running your ${dsaState.language} solution…</span></div>
  `;
  setInterviewPhase("test");
  addInterviewMessage("user", "I’m ready to run the test cases.");

  try {
    const result = await window.DsaRunner.execute(dsaState.currentQuestion.id, dsaState.language, code);
    const passed = result.cases.filter((test) => test.passed).length;
    document.querySelector("#test-results-title").textContent = `${passed}/${result.cases.length} test cases passed`;
    document.querySelector("#test-case-list").innerHTML = renderDsaTestCases(result.cases, dsaState.currentQuestion.id);
    addInterviewMessage(
      "bot",
      passed === result.cases.length
        ? `All ${passed} test cases passed. Before submitting, explain your time and space complexity.`
        : `${passed} of ${result.cases.length} test cases passed. Review the failing case and walk me through the state at the point it diverges.`
    );
    dsaState.lastRun = { passed, total: result.cases.length, cases: result.cases, time: result.time, memory: result.memory };
  } catch (error) {
    const message = String(error.message || error).split("\n").slice(0, 4).join(" ");
    document.querySelector("#test-results-title").textContent = "Compilation or runtime error";
    document.querySelector("#test-case-list").innerHTML = `
      <div class="runner-error"><strong>Runner output</strong><pre></pre></div>
    `;
    document.querySelector(".runner-error pre").textContent = message;
    addInterviewMessage("bot", "The code did not complete successfully. Read the compiler/runtime message, fix it, and try again.");
    dsaState.lastRun = { passed: 0, total: 0, error: message };
  } finally {
    runButton.classList.remove("loading");
    runButton.disabled = false;
    runLabel.textContent = "Run code";
  }
}

function formatRunValue(value) {
  if (typeof value === "string") return value;
  try { return JSON.stringify(value); } catch (_) { return String(value); }
}

function saveDsaSubmission(payload) {
  const submission = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    questionId: dsaState.currentQuestion.id,
    title: dsaState.currentQuestion.title,
    difficulty: dsaState.currentQuestion.difficulty,
    language: dsaState.language,
    code: getDsaCode(),
    createdAt: new Date().toISOString(),
    run: dsaState.lastRun,
    ...payload
  };
  dsaState.submissions.unshift(submission);
  dsaState.submissions = dsaState.submissions.slice(0, 50);
  localStorage.setItem("signal-dsa-submissions", JSON.stringify(dsaState.submissions));
  document.querySelector("#submission-count").textContent = dsaState.submissions.length;
  renderSubmissionHistory();
}

function renderSubmissionHistory() {
  const list = document.querySelector("#submission-list");
  const empty = document.querySelector("#submission-empty");
  empty.classList.toggle("hidden", dsaState.submissions.length > 0);
  list.classList.toggle("hidden", dsaState.submissions.length === 0);
  list.innerHTML = dsaState.submissions.map((submission) => {
    const date = new Date(submission.createdAt);
    const runText = submission.run && submission.run.total
      ? `${submission.run.passed}/${submission.run.total} tests`
      : "Not run";
    return `
      <article class="submission-card">
        <div class="submission-card-top">
          <span class="submission-language">${submission.language}</span>
          <span>${date.toLocaleDateString([], { month: "short", day: "numeric" })} · ${date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
        </div>
        <h3>${submission.title}</h3>
        <p>${submission.verdict}</p>
        <div class="submission-metrics">
          <span>${submission.time}</span>
          <span>${submission.space}</span>
          <span>${runText}</span>
        </div>
        <button class="reopen-submission" data-submission-id="${submission.id}">Reopen solution →</button>
      </article>
    `;
  }).join("");
}

function openSubmissionDrawer() {
  renderSubmissionHistory();
  document.querySelector("#submission-drawer").classList.add("open");
  document.querySelector("#submission-backdrop").classList.add("open");
  document.querySelector("#submission-drawer").setAttribute("aria-hidden", "false");
}

function closeSubmissionDrawer() {
  document.querySelector("#submission-drawer").classList.remove("open");
  document.querySelector("#submission-backdrop").classList.remove("open");
  document.querySelector("#submission-drawer").setAttribute("aria-hidden", "true");
}

function reopenSubmission(id) {
  const submission = dsaState.submissions.find((item) => item.id === id);
  if (!submission) return;
  const question = dsaQuestions.find((item) => item.id === submission.questionId);
  if (!question) return;

  dsaState.language = submission.language;
  document.querySelector("#code-language").value = submission.language;
  if (dsaEditorInstance) dsaEditorInstance.setOption("mode", codeMirrorMode(submission.language));
  renderDsaQuestion(question);
  setDsaCode(submission.code);
  updateEditorLanguageChrome();
  updateDsaLineCount();

  dsaState.sessionStarted = true;
  dsaState.lastRun = submission.run || null;
  dsaElements.launch.classList.add("hidden");
  document.querySelector("#analysis-verdict").textContent = submission.verdict;
  document.querySelector("#estimated-time").textContent = submission.time;
  document.querySelector("#estimated-space").textContent = submission.space;
  document.querySelector("#optimal-target").textContent = submission.optimalTarget;
  document.querySelector("#optimal-pattern").textContent = submission.pattern;
  document.querySelector("#time-comparison").textContent = submission.timeComparison;
  document.querySelector("#space-comparison").textContent = submission.spaceComparison;
  document.querySelector("#analysis-summary").textContent = submission.summary;
  document.querySelector("#analysis-feedback").innerHTML = submission.feedback.map((item) => `<li>${item}</li>`).join("");
  dsaElements.analysisPlaceholder.classList.add("hidden");
  dsaElements.analysisPanel.classList.remove("hidden");
  document.querySelector("#session-status").className = "session-status submitted";
  document.querySelector("#session-status").innerHTML = "<i></i> Reopened submission";
  document.querySelector("#interviewer-state").textContent = "Reviewing saved attempt";
  setInterviewPhase("test");
  resetInterviewMessages();
  addInterviewMessage("bot", "This is your saved submission. Review the feedback, edit the code, and run it again when you’re ready.");

  if (submission.run && submission.run.cases) {
    document.querySelector("#test-results-title").textContent = `${submission.run.passed}/${submission.run.total} saved test cases passed`;
    document.querySelector("#test-case-list").innerHTML = renderDsaTestCases(submission.run.cases, submission.questionId);
    dsaElements.testResults.classList.remove("hidden");
  }
  closeSubmissionDrawer();
  document.querySelector("#dsa-view").scrollIntoView({ behavior: "smooth" });
}

function analyzeDsaSolution() {
  if (!ensureInterviewStarted()) return;
  const code = getDsaCode();
  const meaningfulLines = meaningfulDsaLines(code);

  if (meaningfulLines.length < 2) {
    showToast("Add more of your solution first");
    focusDsaEditor();
    return;
  }

  const question = dsaState.currentQuestion;
  const estimate = estimateDsaComplexity(code);
  const estimateRank = dsaComplexityRank(estimate.time);
  const targetRank = dsaComplexityRank(question.optimalTime);
  const normalizedCode = code.toLowerCase();
  const hasExpectedSignal = question.signals.some((signal) => normalizedCode.includes(signal));
  const feedback = [];

  if (estimate.hasNestedLoop && targetRank < dsaComplexityRank("O(n²)")) {
    feedback.push("The nested traversal is likely the main bottleneck. Look for stored state that avoids repeated searching.");
  } else if (estimateRank <= targetRank) {
    feedback.push("Your visible control flow is consistent with the expected time-complexity class.");
  } else {
    feedback.push("The current structure appears slower than the target complexity for this problem.");
  }

  feedback.push(
    hasExpectedSignal
      ? `You appear to be using the core ${question.pattern.toLowerCase()} idea.`
      : `Consider whether the ${question.pattern.toLowerCase()} pattern can simplify the solution.`
  );

  if (!/\bif\b/.test(normalizedCode)) {
    feedback.push("Add explicit handling for edge cases and boundary conditions.");
  }
  if (estimate.hasSort && !question.optimalTime.includes("log")) {
    feedback.push("Sorting adds O(n log n). Confirm that this ordering step is necessary.");
  }

  const targetMet = estimateRank <= targetRank && hasExpectedSignal;
  document.querySelector("#analysis-verdict").textContent = targetMet
    ? "Strong approach — validate edge cases"
    : "Good start — there is room to optimize";
  document.querySelector("#estimated-time").textContent = estimate.time;
  document.querySelector("#estimated-space").textContent = estimate.space;
  document.querySelector("#optimal-target").textContent = `${question.optimalTime} · ${question.optimalSpace}`;
  document.querySelector("#optimal-pattern").textContent = question.pattern;
  document.querySelector("#time-comparison").textContent = estimateRank <= targetRank ? "At or near target" : "Slower than target";
  document.querySelector("#space-comparison").textContent = estimate.space === question.optimalSpace ? "Matches target" : "Review allocations";
  document.querySelector("#analysis-summary").textContent =
    `I estimated this from the loops, recursion, sorting, and data structures visible in your code. The intended pattern for ${question.title} is ${question.pattern.toLowerCase()}, targeting ${question.optimalTime} time and ${question.optimalSpace} space.`;
  document.querySelector("#analysis-feedback").innerHTML = feedback.map((item) => `<li>${item}</li>`).join("");

  dsaElements.analysisPlaceholder.classList.add("hidden");
  dsaElements.analysisPanel.classList.remove("hidden");
  setInterviewPhase("test");
  if (dsaState.timerRunning) toggleDsaTimer();
  document.querySelector("#session-status").className = "session-status submitted";
  document.querySelector("#session-status").innerHTML = "<i></i> Submitted";
  document.querySelector("#interviewer-state").textContent = "Interview complete";
  addInterviewMessage("bot", "Thanks. I’ve captured the solution. Let’s review the complexity, correctness signals, and where you could make the explanation sharper.");
  dsaState.practiced.add(question.id);
  localStorage.setItem("signal-dsa-practiced", JSON.stringify([...dsaState.practiced]));
  document.querySelector("#practiced-count").textContent = dsaState.practiced.size;
  saveDsaSubmission({
    verdict: document.querySelector("#analysis-verdict").textContent,
    time: estimate.time,
    space: estimate.space,
    optimalTarget: `${question.optimalTime} · ${question.optimalSpace}`,
    pattern: question.pattern,
    timeComparison: estimateRank <= targetRank ? "At or near target" : "Slower than target",
    spaceComparison: estimate.space === question.optimalSpace ? "Matches target" : "Review allocations",
    summary: document.querySelector("#analysis-summary").textContent,
    feedback
  });
}

function bindDsaEvents() {
  document.querySelector("#random-question").addEventListener("click", chooseRandomDsaQuestion);
  document.querySelector("#random-question-top").addEventListener("click", chooseRandomDsaQuestion);
  document.querySelector("#start-interview").addEventListener("click", () => beginInterview(false));
  document.querySelector("#practice-only").addEventListener("click", () => beginInterview(true));
  document.querySelector("#timer-toggle").addEventListener("click", toggleDsaTimer);
  document.querySelector("#timer-reset").addEventListener("click", resetDsaTimer);
  document.querySelector("#run-tests").addEventListener("click", runDsaChecks);
  document.querySelector("#analyze-solution").addEventListener("click", analyzeDsaSolution);
  document.querySelector("#open-submissions").addEventListener("click", openSubmissionDrawer);
  document.querySelector("#close-submissions").addEventListener("click", closeSubmissionDrawer);
  document.querySelector("#submission-backdrop").addEventListener("click", closeSubmissionDrawer);
  document.querySelector("#submission-list").addEventListener("click", (event) => {
    const button = event.target.closest(".reopen-submission");
    if (button) reopenSubmission(button.dataset.submissionId);
  });
  document.querySelector("#editor-fullscreen").addEventListener("click", () => {
    document.body.classList.toggle("editor-fullscreen");
    const active = document.body.classList.contains("editor-fullscreen");
    document.querySelector("#editor-fullscreen").lastChild.textContent = active ? " Exit focus" : " Focus editor";
    window.setTimeout(() => {
      if (dsaEditorInstance) dsaEditorInstance.refresh();
    }, 50);
  });
  document.querySelectorAll("[data-interview-prompt]").forEach((button) => {
    button.addEventListener("click", () => handleInterviewerPrompt(button.dataset.interviewPrompt));
  });

  document.querySelector("#reset-code").addEventListener("click", () => {
    setDsaCode(dsaStarterCode(dsaState.currentQuestion, dsaState.language));
    updateDsaLineCount();
    dsaElements.analysisPanel.classList.add("hidden");
    dsaElements.analysisPlaceholder.classList.remove("hidden");
  });

  document.querySelector("#hint-button").addEventListener("click", () => {
    if (!ensureInterviewStarted()) return;
    const hint = document.querySelector("#question-hint");
    const wasHidden = hint.classList.contains("hidden");
    hint.classList.toggle("hidden");
    document.querySelector("#hint-button span").textContent = hint.classList.contains("hidden") ? "Show one hint" : "Hide hint";
    if (wasHidden) {
      addInterviewMessage("user", "May I have one small hint?");
      addInterviewMessage("bot", dsaState.currentQuestion.hint);
      setInterviewPhase("plan");
    }
  });

  document.querySelector("#code-language").addEventListener("change", (event) => {
    dsaState.language = event.target.value;
    setDsaCode(dsaStarterCode(dsaState.currentQuestion, dsaState.language));
    if (dsaEditorInstance) dsaEditorInstance.setOption("mode", codeMirrorMode(dsaState.language));
    document.querySelector("#question-contract").textContent = dsaFunctionContract(dsaState.currentQuestion.id, dsaState.language);
    updateEditorLanguageChrome();
    updateDsaLineCount();
  });

  document.querySelectorAll(".pattern-filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".pattern-filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      dsaState.activePattern = button.dataset.pattern;
      chooseRandomDsaQuestion();
    });
  });

}

window.initializeDsa = function initializeDsa() {
  if (!dsaState.initialized) {
    initializeCodeMirror();
    bindDsaEvents();
    document.querySelector("#practiced-count").textContent = dsaState.practiced.size;
    document.querySelector("#submission-count").textContent = dsaState.submissions.length;
    renderSubmissionHistory();
    dsaState.initialized = true;
  }
  if (!dsaState.currentQuestion) chooseRandomDsaQuestion();
};

window.filterDsaQuestions = function filterDsaQuestions(query) {
  dsaState.query = query;
  const results = dsaEligibleQuestions();
  if (results.length) renderDsaQuestion(results[0]);
  else showToast("No DSA questions match that search");
};
