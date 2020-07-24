depthFirstSearch = (nodes, graph, start) => {
    /* 
    n = numer of nodes in the graph
    g = adjacency of the graph e.g. [[1,2],[0,2],[0,1]] is a triangle [[1],[0,2],[1]] is a line.
    start = node to start search from
    */
   // creating an array of visited nodes
    let visited = Array.apply(null, {length: (nodes)}).map(Boolean, false)
    // begining the algorithm
    let stack = []

    function dfs(node) {
        if(visited[node] === true) {return}
        else{ 
            visited[node] = true
            stack.push(node)
        }

        let neightbourhood = graph[node]
        for (next in neightbourhood){
            dfs(next)
        }
    }

    dfs(start)
    return stack
}