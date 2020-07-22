depthFirstSearch = (n, g, start) => {
    /* 
    n = numer of nodes in the graph
    g = adjacency of the graph e.g. [[1,2],[0,2],[0,1]] is a triangle
    start = node to start search from
    */
   // creating an array of visited nodes
    let visited = Array.apply(null, {length: (n)}).map(Boolean, false)
    // begining the algorithm
    let stack = []

    visited[start] = true

    function dfs(node) {
        if(visited[node] === true) {return}
        else{ 
            visited[node] = true
            stack.push(node)
        }

        let neightbourhood = g[node]
        for (next in neightbourhood){
            dfs(next)
        }
    }
    console.log(stack)
    return dfs(start)
}
