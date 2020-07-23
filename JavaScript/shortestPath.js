shortestPath = (nodes, graph, start, end) => {
    /* 
    nodes = number of nodes in the graph
    graph = adjacency of the graph e.g. [[1,2],[0,2],[0,1]] is a triangle [[1],[0,2],[1]] is a line.
    start = node to start search from
    */
   // creating an array of visited nodes
    let visited = Array.apply(null, {length: (nodes)}).map(Boolean, false)
    let prev = Array(nodes)
    // begining the algorithm
    let stack = [start]
    visited[start] = true
    
    function bfs(node) {
        let neightbourhood = graph[node]
        for (next in neightbourhood){
            if (!visited[next]){
                stack.push(next)
                visited[next] = true
                prev[next] = node
            }
        }
    }

    for (node in stack){
        bfs(node)
    }

    let path = [prev[end], end]
    while (path[0]!==start){
        path.unshift(prev[path[0]])
    }
    return path
}