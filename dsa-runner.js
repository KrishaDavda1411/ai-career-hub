const DSA_PROBLEM_SPECS = {
  "two-sum": {
    method: "twoSum", pyMethod: "two_sum", returnType: "intArray",
    params: [["nums", "intArray"], ["target", "int"]],
    tests: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[3, 2, 4], 6], expected: [1, 2] },
      { args: [[3, 3], 6], expected: [0, 1] }
    ]
  },
  "longest-substring": {
    method: "lengthOfLongestSubstring", pyMethod: "length_of_longest_substring", returnType: "int",
    params: [["s", "string"]],
    tests: [
      { args: ["abcabcbb"], expected: 3 },
      { args: ["bbbbb"], expected: 1 },
      { args: [""], expected: 0 }
    ]
  },
  "product-except-self": {
    method: "productExceptSelf", pyMethod: "product_except_self", returnType: "intArray",
    params: [["nums", "intArray"]],
    tests: [
      { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
      { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
      { args: [[2, 3]], expected: [3, 2] }
    ]
  },
  "merge-intervals": {
    method: "merge", pyMethod: "merge", returnType: "intMatrix",
    params: [["intervals", "intMatrix"]],
    tests: [
      { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
      { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
      { args: [[[1, 4], [0, 2], [3, 5]]], expected: [[0, 5]] }
    ]
  },
  "search-rotated-array": {
    method: "search", pyMethod: "search", returnType: "int",
    params: [["nums", "intArray"], ["target", "int"]],
    tests: [
      { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
      { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
      { args: [[1], 0], expected: -1 }
    ]
  },
  "trapping-rain-water": {
    method: "trap", pyMethod: "trap", returnType: "int",
    params: [["height", "intArray"]],
    tests: [
      { args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
      { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
      { args: [[1, 2, 3]], expected: 0 }
    ]
  },
  "number-of-islands": {
    method: "numIslands", pyMethod: "num_islands", returnType: "int",
    params: [["grid", "grid"]],
    tests: [
      { args: [["110", "100", "001"]], expected: 2 },
      { args: [["11110", "11010", "11000", "00000"]], expected: 1 },
      { args: [["0"]], expected: 0 }
    ]
  },
  "course-schedule": {
    method: "canFinish", pyMethod: "can_finish", returnType: "boolean",
    params: [["numCourses", "int"], ["prerequisites", "intMatrix"]],
    tests: [
      { args: [2, [[1, 0]]], expected: true },
      { args: [2, [[1, 0], [0, 1]]], expected: false },
      { args: [4, [[1, 0], [2, 1], [3, 2]]], expected: true }
    ]
  },
  "clone-graph": {
    method: "cloneGraph", pyMethod: "clone_graph", returnType: "graph",
    params: [["node", "graph"]],
    tests: [
      { args: [[[2, 4], [1, 3], [2, 4], [1, 3]]], expected: [[2, 4], [1, 3], [2, 4], [1, 3]] },
      { args: [[[]]], expected: [[]] },
      { args: [[]], expected: [] }
    ]
  },
  "level-order": {
    method: "levelOrder", pyMethod: "level_order", returnType: "listMatrix",
    params: [["root", "tree"]],
    tests: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [9, 20], [15, 7]] },
      { args: [[1]], expected: [[1]] },
      { args: [[]], expected: [] }
    ]
  },
  "lowest-common-ancestor": {
    method: "lowestCommonAncestor", pyMethod: "lowest_common_ancestor", returnType: "treeNode",
    kind: "lca",
    params: [["root", "tree"], ["p", "treeNode"], ["q", "treeNode"]],
    tests: [
      { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1], expected: 3 },
      { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4], expected: 5 },
      { args: [[1, 2], 1, 2], expected: 1 }
    ]
  },
  "validate-bst": {
    method: "isValidBST", pyMethod: "is_valid_bst", returnType: "boolean",
    params: [["root", "tree"]],
    tests: [
      { args: [[2, 1, 3]], expected: true },
      { args: [[5, 1, 4, null, null, 3, 6]], expected: false },
      { args: [[2, 2, 2]], expected: false }
    ]
  },
  "coin-change": {
    method: "coinChange", pyMethod: "coin_change", returnType: "int",
    params: [["coins", "intArray"], ["amount", "int"]],
    tests: [
      { args: [[1, 2, 5], 11], expected: 3 },
      { args: [[2], 3], expected: -1 },
      { args: [[1], 0], expected: 0 }
    ]
  },
  "word-break": {
    method: "wordBreak", pyMethod: "word_break", returnType: "boolean",
    params: [["s", "string"], ["wordDict", "stringList"]],
    tests: [
      { args: ["leetcode", ["leet", "code"]], expected: true },
      { args: ["applepenapple", ["apple", "pen"]], expected: true },
      { args: ["catsandog", ["cats", "dog", "sand", "and", "cat"]], expected: false }
    ]
  },
  "lru-cache": {
    method: "LRUCache", pyMethod: "LRUCache", returnType: "operationList",
    kind: "lru",
    params: [["capacity", "int"]],
    tests: [
      {
        args: [2, [["put", 1, 1], ["put", 2, 2], ["get", 1], ["put", 3, 3], ["get", 2], ["put", 4, 4], ["get", 1], ["get", 3], ["get", 4]]],
        expected: [null, null, 1, null, -1, null, -1, 3, 4]
      },
      {
        args: [1, [["put", 2, 1], ["get", 2], ["put", 3, 2], ["get", 2], ["get", 3]]],
        expected: [null, 1, null, -1, 2]
      }
    ]
  }
};

const JAVA_TYPES = {
  int: "int",
  string: "String",
  intArray: "int[]",
  intMatrix: "int[][]",
  grid: "char[][]",
  stringList: "List<String>",
  tree: "TreeNode",
  treeNode: "TreeNode",
  graph: "Node"
};

function runnerStarterCode(problemId, language) {
  const spec = DSA_PROBLEM_SPECS[problemId];
  if (!spec) return "";

  if (spec.kind === "lru") {
    if (language === "java") {
      return `class LRUCache {\n    public LRUCache(int capacity) {\n        // Initialize your data structures.\n    }\n\n    public int get(int key) {\n        return -1;\n    }\n\n    public void put(int key, int value) {\n    }\n}`;
    }
    if (language === "javascript") {
      return `class LRUCache {\n  constructor(capacity) {\n    // Initialize your data structures.\n  }\n\n  get(key) {\n    return -1;\n  }\n\n  put(key, value) {\n  }\n}`;
    }
    return `class LRUCache:\n    def __init__(self, capacity):\n        # Initialize your data structures.\n        pass\n\n    def get(self, key):\n        return -1\n\n    def put(self, key, value):\n        pass`;
  }

  if (language === "java") {
    const params = spec.params.map(([name, type]) => `${JAVA_TYPES[type]} ${name}`).join(", ");
    const returnType = {
      int: "int", boolean: "boolean", intArray: "int[]", intMatrix: "int[][]",
      listMatrix: "List<List<Integer>>", treeNode: "TreeNode", graph: "Node"
    }[spec.returnType];
    const fallback = returnType === "int" ? "-1" : returnType === "boolean" ? "false" : "null";
    return `class Solution {\n    public ${returnType} ${spec.method}(${params}) {\n        // Explain your approach before coding.\n        \n        return ${fallback};\n    }\n}`;
  }

  if (language === "javascript") {
    const params = spec.params.map(([name]) => name).join(", ");
    return `function ${spec.method}(${params}) {\n  // Explain your approach before coding.\n  \n  return null;\n}`;
  }

  const params = spec.params.map(([name]) => name).join(", ");
  return `class Solution:\n    def ${spec.pyMethod}(self, ${params}):\n        # Explain your approach before coding.\n        \n        pass`;
}

function pyLiteral(value) {
  if (value === null) return "None";
  if (value === true) return "True";
  if (value === false) return "False";
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(pyLiteral).join(", ")}]`;
  return String(value);
}

function jsLiteral(value) {
  return JSON.stringify(value);
}

function javaLiteral(value, type) {
  if (type === "int") return String(value);
  if (type === "string") return JSON.stringify(value);
  if (type === "intArray") return `new int[]{${value.join(",")}}`;
  if (type === "intMatrix") return `new int[][]{${value.map((row) => `{${row.join(",")}}`).join(",")}}`;
  if (type === "grid") return `new char[][]{${value.map((row) => `{${row.split("").map((char) => `'${char}'`).join(",")}}`).join(",")}}`;
  if (type === "stringList") return `Arrays.asList(${value.map((item) => JSON.stringify(item)).join(",")})`;
  if (type === "tree") return `buildTree(new Integer[]{${value.map((item) => item === null ? "null" : item).join(",")}})`;
  if (type === "graph") return `buildGraph(new int[][]{${value.map((row) => `{${row.join(",")}}`).join(",")}})`;
  return String(value);
}

function pythonPrelude() {
  return `import json\nfrom collections import deque\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nclass Node:\n    def __init__(self, val=0, neighbors=None):\n        self.val = val\n        self.neighbors = neighbors if neighbors is not None else []\n\ndef build_tree(values):\n    if not values: return None\n    nodes = [None if value is None else TreeNode(value) for value in values]\n    kids = deque(nodes[1:])\n    for node in nodes:\n        if node:\n            if kids: node.left = kids.popleft()\n            if kids: node.right = kids.popleft()\n    return nodes[0]\n\ndef find_node(root, value):\n    if not root: return None\n    if root.val == value: return root\n    return find_node(root.left, value) or find_node(root.right, value)\n\ndef build_graph(adj):\n    if not adj: return None\n    nodes = [Node(i + 1) for i in range(len(adj))]\n    for i, neighbors in enumerate(adj):\n        nodes[i].neighbors = [nodes[value - 1] for value in neighbors]\n    return nodes[0]\n\ndef serialize_graph(node):\n    if not node: return []\n    seen, queue, result = set(), deque([node]), {}\n    while queue:\n        current = queue.popleft()\n        if current.val in seen: continue\n        seen.add(current.val)\n        result[current.val] = sorted(neighbor.val for neighbor in current.neighbors)\n        queue.extend(current.neighbors)\n    return [result[key] for key in sorted(result)]\n`;
}

function javascriptPrelude() {
  return `class TreeNode { constructor(val=0,left=null,right=null){this.val=val;this.left=left;this.right=right;} }\nclass Node { constructor(val=0,neighbors=[]){this.val=val;this.neighbors=neighbors;} }\nfunction buildTree(values){if(!values.length)return null;const nodes=values.map(v=>v===null?null:new TreeNode(v));let j=1;for(const node of nodes){if(node){if(j<nodes.length)node.left=nodes[j++];if(j<nodes.length)node.right=nodes[j++];}}return nodes[0];}\nfunction findNode(root,value){if(!root)return null;if(root.val===value)return root;return findNode(root.left,value)||findNode(root.right,value);}\nfunction buildGraph(adj){if(!adj.length)return null;const nodes=adj.map((_,i)=>new Node(i+1));adj.forEach((neighbors,i)=>nodes[i].neighbors=neighbors.map(v=>nodes[v-1]));return nodes[0];}\nfunction serializeGraph(node){if(!node)return [];const seen=new Set(),queue=[node],result={};while(queue.length){const current=queue.shift();if(seen.has(current.val))continue;seen.add(current.val);result[current.val]=current.neighbors.map(n=>n.val).sort((a,b)=>a-b);queue.push(...current.neighbors);}return Object.keys(result).sort((a,b)=>a-b).map(k=>result[k]);}\n`;
}

function javaPrelude() {
  return `import java.util.*;\n\nclass TreeNode { int val; TreeNode left, right; TreeNode(int val){this.val=val;} }\nclass Node { public int val; public List<Node> neighbors; Node(int val){this.val=val;this.neighbors=new ArrayList<>();} }\n`;
}

function pythonHarness(spec) {
  if (spec.kind === "lru") {
    return spec.tests.map((test, index) => {
      const operations = pyLiteral(test.args[1]);
      return `\ntry:\n    cache = LRUCache(${test.args[0]})\n    actual = []\n    for op in ${operations}:\n        if op[0] == "put": cache.put(op[1], op[2]); actual.append(None)\n        else: actual.append(cache.get(op[1]))\n    expected = ${pyLiteral(test.expected)}\n    print("__CASE__" + json.dumps({"index":${index},"passed":actual==expected,"actual":actual,"expected":expected}))\nexcept Exception as error:\n    print("__CASE__" + json.dumps({"index":${index},"passed":False,"error":str(error)}))`;
    }).join("\n");
  }

  return spec.tests.map((test, index) => {
    let setup = "";
    let invocation;
    if (spec.kind === "lca") {
      setup = `    root = build_tree(${pyLiteral(test.args[0])})\n`;
      invocation = `Solution().${spec.pyMethod}(root, find_node(root, ${test.args[1]}), find_node(root, ${test.args[2]}))`;
    } else {
      const args = spec.params.map(([, type], argIndex) => {
        const value = test.args[argIndex];
        if (type === "tree") return `build_tree(${pyLiteral(value)})`;
        if (type === "graph") return `build_graph(${pyLiteral(value)})`;
        if (type === "grid") return `[list(row) for row in ${pyLiteral(value)}]`;
        return pyLiteral(value);
      }).join(", ");
      invocation = `Solution().${spec.pyMethod}(${args})`;
    }
    const normalize = spec.returnType === "treeNode" ? "None if actual is None else actual.val"
      : spec.returnType === "graph" ? "serialize_graph(actual)" : "actual";
    return `\ntry:\n${setup}    actual = ${invocation}\n    actual = ${normalize}\n    expected = ${pyLiteral(test.expected)}\n    print("__CASE__" + json.dumps({"index":${index},"passed":actual==expected,"actual":actual,"expected":expected}))\nexcept Exception as error:\n    print("__CASE__" + json.dumps({"index":${index},"passed":False,"error":str(error)}))`;
  }).join("\n");
}

function javascriptHarness(spec) {
  if (spec.kind === "lru") {
    return spec.tests.map((test, index) => `
try {
  const cache = new LRUCache(${test.args[0]});
  const actual = ${jsLiteral(test.args[1])}.map(op => { if(op[0]==="put"){cache.put(op[1],op[2]);return null;} return cache.get(op[1]); });
  const expected = ${jsLiteral(test.expected)};
  console.log("__CASE__"+JSON.stringify({index:${index},passed:JSON.stringify(actual)===JSON.stringify(expected),actual,expected}));
} catch(error) { console.log("__CASE__"+JSON.stringify({index:${index},passed:false,error:error.message})); }`).join("\n");
  }

  return spec.tests.map((test, index) => {
    let setup = "";
    let invocation;
    if (spec.kind === "lca") {
      setup = `const root${index}=buildTree(${jsLiteral(test.args[0])});`;
      invocation = `${spec.method}(root${index},findNode(root${index},${test.args[1]}),findNode(root${index},${test.args[2]}))`;
    } else {
      const args = spec.params.map(([, type], argIndex) => {
        const value = test.args[argIndex];
        if (type === "tree") return `buildTree(${jsLiteral(value)})`;
        if (type === "graph") return `buildGraph(${jsLiteral(value)})`;
        if (type === "grid") return `${jsLiteral(value)}.map(row=>row.split(""))`;
        return jsLiteral(value);
      }).join(", ");
      invocation = `${spec.method}(${args})`;
    }
    const normalize = spec.returnType === "treeNode" ? "actual===null?null:actual.val"
      : spec.returnType === "graph" ? "serializeGraph(actual)" : "actual";
    return `
try { ${setup}
  let actual=${invocation}; actual=${normalize};
  const expected=${jsLiteral(test.expected)};
  console.log("__CASE__"+JSON.stringify({index:${index},passed:JSON.stringify(actual)===JSON.stringify(expected),actual,expected}));
} catch(error) { console.log("__CASE__"+JSON.stringify({index:${index},passed:false,error:error.message})); }`;
  }).join("\n");
}

function javaResultExpression(variable, type) {
  if (type === "intArray") return `Arrays.toString(${variable})`;
  if (type === "intMatrix") return `Arrays.deepToString(${variable})`;
  if (type === "graph") return `serializeGraph(${variable}).toString()`;
  if (type === "treeNode") return `String.valueOf(${variable} == null ? null : ${variable}.val)`;
  return `String.valueOf(${variable})`;
}

function javaExpectedExpression(value, type) {
  if (type === "intArray") return `Arrays.toString(${javaLiteral(value, "intArray")})`;
  if (type === "intMatrix") return `Arrays.deepToString(${javaLiteral(value, "intMatrix")})`;
  if (type === "listMatrix") return `matrixToList(${javaLiteral(value, "intMatrix")}).toString()`;
  if (type === "graph") return `matrixToList(${javaLiteral(value, "intMatrix")}).toString()`;
  return `String.valueOf(${value === null ? "null" : typeof value === "string" ? JSON.stringify(value) : value})`;
}

function javaHarness(spec) {
  if (spec.kind === "lru") {
    return spec.tests.map((test, index) => {
      const ops = test.args[1].map((operation) =>
        operation[0] === "put"
          ? `cache.put(${operation[1]},${operation[2]}); actual.add(null);`
          : `actual.add(cache.get(${operation[1]}));`
      ).join("");
      const expected = `Arrays.asList(${test.expected.map((value) => value === null ? "null" : value).join(",")})`;
      return `try{LRUCache cache=new LRUCache(${test.args[0]});List<Integer> actual=new ArrayList<>();${ops}List<Integer> expected=${expected};printCase(${index},actual.equals(expected),actual.toString(),expected.toString());}catch(Exception e){printError(${index},e);}`;
    }).join("\n");
  }

  return spec.tests.map((test, index) => {
    let setup = "";
    let invocation;
    if (spec.kind === "lca") {
      setup = `TreeNode root${index}=buildTree(new Integer[]{${test.args[0].map((item) => item === null ? "null" : item).join(",")}});`;
      invocation = `new Solution().${spec.method}(root${index},findNode(root${index},${test.args[1]}),findNode(root${index},${test.args[2]}))`;
    } else {
      const args = spec.params.map(([, type], argIndex) => javaLiteral(test.args[argIndex], type)).join(", ");
      invocation = `new Solution().${spec.method}(${args})`;
    }
    const javaReturn = {
      int: "int", boolean: "boolean", intArray: "int[]", intMatrix: "int[][]",
      listMatrix: "List<List<Integer>>", treeNode: "TreeNode", graph: "Node"
    }[spec.returnType];
    const actualExpression = javaResultExpression("actual", spec.returnType);
    const expectedExpression = javaExpectedExpression(test.expected, spec.returnType);
    return `try{${setup}${javaReturn} actual=${invocation};String actualText=${actualExpression};String expectedText=${expectedExpression};printCase(${index},actualText.equals(expectedText),actualText,expectedText);}catch(Exception e){printError(${index},e);}`;
  }).join("\n");
}

function javaMain(spec) {
  return `
public class Main {
  static TreeNode buildTree(Integer[] values){if(values.length==0)return null;TreeNode[] nodes=new TreeNode[values.length];for(int i=0;i<values.length;i++)if(values[i]!=null)nodes[i]=new TreeNode(values[i]);int child=1;for(TreeNode node:nodes)if(node!=null){if(child<nodes.length)node.left=nodes[child++];if(child<nodes.length)node.right=nodes[child++];}return nodes[0];}
  static TreeNode findNode(TreeNode root,int value){if(root==null)return null;if(root.val==value)return root;TreeNode left=findNode(root.left,value);return left!=null?left:findNode(root.right,value);}
  static Node buildGraph(int[][] adj){if(adj.length==0)return null;Node[] nodes=new Node[adj.length];for(int i=0;i<adj.length;i++)nodes[i]=new Node(i+1);for(int i=0;i<adj.length;i++)for(int value:adj[i])nodes[i].neighbors.add(nodes[value-1]);return nodes[0];}
  static List<List<Integer>> serializeGraph(Node node){List<List<Integer>> result=new ArrayList<>();if(node==null)return result;Map<Integer,List<Integer>> map=new TreeMap<>();Queue<Node> queue=new LinkedList<>();Set<Integer> seen=new HashSet<>();queue.add(node);while(!queue.isEmpty()){Node current=queue.poll();if(!seen.add(current.val))continue;List<Integer> row=new ArrayList<>();for(Node neighbor:current.neighbors){row.add(neighbor.val);queue.add(neighbor);}Collections.sort(row);map.put(current.val,row);}result.addAll(map.values());return result;}
  static List<List<Integer>> matrixToList(int[][] matrix){List<List<Integer>> result=new ArrayList<>();for(int[] row:matrix){List<Integer> list=new ArrayList<>();for(int value:row)list.add(value);result.add(list);}return result;}
  static String clean(String value){return value.replace("|","/").replace("\\n"," ");}
  static void printCase(int index,boolean pass,String actual,String expected){System.out.println("__CASE__|"+index+"|"+(pass?"PASS":"FAIL")+"|"+clean(actual)+"|"+clean(expected));}
  static void printError(int index,Exception error){System.out.println("__CASE__|"+index+"|FAIL|ERROR: "+clean(error.getMessage())+"|");}
  public static void main(String[] args){${javaHarness(spec)}}
}`;
}

function buildRunnerSource(problemId, language, userCode) {
  const spec = DSA_PROBLEM_SPECS[problemId];
  if (language === "java") return `${javaPrelude()}\n${userCode}\n${javaMain(spec)}`;
  if (language === "javascript") return `${javascriptPrelude()}\n${userCode}\n${javascriptHarness(spec)}`;
  return `${pythonPrelude()}\n${userCode}\n${pythonHarness(spec)}`;
}

function parseRunnerOutput(stdout, testCount) {
  const cases = [];
  String(stdout || "").split(/\r?\n/).forEach((line) => {
    if (!line.startsWith("__CASE__")) return;
    const payload = line.slice(8);
    if (payload.startsWith("{")) {
      try { cases.push(JSON.parse(payload)); } catch (_) {}
    } else {
      const parts = payload.replace(/^\|/, "").split("|");
      cases.push({
        index: Number(parts[0]),
        passed: parts[1] === "PASS",
        actual: parts[2],
        expected: parts[3]
      });
    }
  });
  return Array.from({ length: testCount }, (_, index) =>
    cases.find((item) => item.index === index) || { index, passed: false, error: "No result returned" }
  );
}

async function executeDsaCode(problemId, language, userCode) {
  const spec = DSA_PROBLEM_SPECS[problemId];
  const languageIds = { python: 71, java: 62, javascript: 63 };
  const response = await fetch("https://ce.judge0.com/submissions?base64_encoded=false&wait=true", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source_code: buildRunnerSource(problemId, language, userCode),
      language_id: languageIds[language],
      stdin: ""
    })
  });
  if (!response.ok) throw new Error(`Runner unavailable (${response.status})`);
  const result = await response.json();
  if (result.compile_output) throw new Error(result.compile_output);
  if (result.stderr) throw new Error(result.stderr);
  return {
    cases: parseRunnerOutput(result.stdout, spec.tests.length).map((test, index) => ({
      ...test,
      input: spec.tests[index].args,
      expected: typeof test.expected === "undefined" ? spec.tests[index].expected : test.expected
    })),
    time: result.time,
    memory: result.memory
  };
}

window.DsaRunner = {
  specs: DSA_PROBLEM_SPECS,
  starterCode: runnerStarterCode,
  execute: executeDsaCode
};
