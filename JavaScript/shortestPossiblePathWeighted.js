shortestPath = (nodes, graph, start, end) => {
    /* 
    n = numer of nodes in the graph
    g = adjacency of the weighted directional graph.
    start = node to start search from
    */
   // creating an array of visited nodes
    let visited = Array.apply(null, {length: (nodes)}).map(Boolean, false)
    let order = Array(nodes)
    let dist =Array(nodes)
    dist[start] = 0
    // begining the algorithm

    function dfs(node, visitedNodes) {
        if(visited[node] === true) {return}
        else{ 
            visited[node] = true
            visitedNodes.push(node)
        }

        let neightbourhood = graph[node]
        for (next in neightbourhood){
            dfs(next)
        }
    }

    for(node = 0; node < nodes; node++){
        if(!visited[node]){
            let visitedNodes = []
            dfs(node, visitedNodes)
            for (nodeID in visitedNodes){
                order[i] = nodeID
                i--
            }
        }
    }

    for (i=0; i<nodes;i++){
        let node = order[i]
        if(dist[node] !== null){
            adjacentEdges = graph[node]
            if (adjacentEdges != []) {
                for (edge in adjacentEdges){
                    let newDistance = dist[node] + edge[1]
                    if(dist[edge[0]] == null){
                        dist[edge[0]] = newDistance
                    }else {
                        dist[edge[0]] = Math.min(dist[edge[0]], newDistance)
                    }

                }
            }
        }
    }

    return dist[end], order[end]
}