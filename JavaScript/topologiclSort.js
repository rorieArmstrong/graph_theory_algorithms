topologicalSort = (nodes, graph, start) => {
    /* 
    n = numer of nodes in the graph
    g = adjacency of the directional graph e.g. [[1,2],[],[]] is a fork going from 0 to 1 and 2. [[1],[2],[]] is a line from 0 to 2 through 1.
    start = node to start search from
    */
   // creating an array of visited nodes
    let visited = Array.apply(null, {length: (nodes)}).map(Boolean, false)
    let order = Array(nodes)
    let i = n-1
    // begining the algorithm

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