connected = (nodes, graph, start) => {
    /* 
    n = numer of nodes in the graph
    g = adjacency of the graph e.g. [[1,2],[0,2],[0,1]] is a triangle [[1],[0,2],[1]] is a line.
    start = node to start search from
    */
   // creating an array of visited nodes
    let visited = Array.apply(null, {length: (nodes)}).map(Boolean, false)
    let components = Array.apply(null, {length: (nodes)}).map((x,i)=>i)
    let count = 0
    // begining the algorithm

    function findComponents() {
        for (i=0; i < nodes; i++){
            if (!visited[i]){
                count++
                dfs(i)
            return (count, components)
            }
        }
    }

    function dfs(node) {
        visited[node] = true
        components[node] = count

        let neightbourhood = graph[node]
        for (next in neightbourhood){
            if (!visited[next]){
                dfs(next)
            }
        }
    }

    findComponents(start)
}
