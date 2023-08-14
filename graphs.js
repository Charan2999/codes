class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(newVertex) {
    if (!this.adjacentList[newVertex]) {
      this.adjacentList[newVertex] = [];
    } else {
      return `Already exists`;
    }
  }

  addEdge(v1, v2) {
    if (this.adjacentList[v1] && this.adjacentList[v2]) {
      this.adjacentList[v1].push(v2);
      this.adjacentList[v2].push(v1);
      return this.adjacentList;
    } else {
      return `Please check the presence vertices`;
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacentList[v1] && this.adjacentList[v2]) {
      this.adjacentList[v1] = this.adjacentList[v1].filter((v) => v !== v2);
      this.adjacentList[v2] = this.adjacentList[v2].filter((v) => v !== v1);
      return this.adjacentList;
    } else {
      return `Please check the presence of edge for vertices`;
    }
  }

  removeVertex(vertex) {
    if (this.adjacentList[vertex]) {
      for (let neighbor of this.adjacentList[vertex]) {
        this.removeEdge(vertex, neighbor);
      }
      delete this.adjacentList[vertex];
      return this.adjacentList;
    } else {
      return `Please check the presence vertex`;
    }
  }

  dfsR() {
    const result = [];
    const visited = {};
    const dfsRecursive = (node) => {
      visited[node] = true;
      result.push(node);
      for (let neighbor of this.adjacentList[node]) {
        if (!visited[neighbor]) {
          dfsRecursive(neighbor);
        }
      }
    };
    for (let vertex in this.adjacentList) {
      if (!visited[vertex]) {
        dfsRecursive(vertex);
      }
    }
    return result;
  }

  dfs(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current);
      for (let neighbor of this.adjacentList[current]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);
      for (let neighbor of this.adjacentList[current]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    return result;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "E");
graph.addEdge("B", "D");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.dfsR());
console.log(graph.dfs("A"));
console.log(graph.bfs("A"));

//      A-----B
//      |     |
//      |     |
//      E-----D
//       \   /
//        \ /
//         C
//         |
//         F
