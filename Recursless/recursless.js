var nodesArray = [
[2,0,1],
[3,0,2],
[4,0,3],
[1,0,4],
];

var nodesArray2 = [
[2,0,1],
[3,0,2],
];

getNodesRelations(nodesArray);

function getNodesRelations(nodes){
	var relations = [];
  //var nodes = [];
 	function findNodeById(id){
  	var relationsWithRootNodeId = relations.filter(function(_node) {
    return _node.id == id;
    });
    return relationsWithRootNodeId.length > 0 ? relationsWithRootNodeId[0] : null;
  }

  function tryAddNewNode(curNode){
    var previousRelation = relations.find(function(relation){
      return relation.id == curNode;
    });
    if (previousRelation != null) {
      return;
    }

    var newNode = {id: curNode,links:[]};
    
    relations.push(newNode);
  }

  for (var i = 0; i < nodes.length; i++) {
    tryAddNewNode(nodes[i][0]);
    tryAddNewNode(nodes[i][2]);
  }

  for (var i = 0; i < nodes.length; i++) {
  	var nodeId = nodes[i][2];
    var nodeLink = nodes[i][0];
    var foundedNode = findNodeById(nodeId);
   /* if(foundedNode == null){
    	foundedNode = {id: nodeId};
      foundedNode.links = [];
    	relations.push(foundedNode);
    } */
    foundedNode.links.push(nodeLink);
  }
  console.log('relations: '+JSON.stringify(relations));
  console.log('toposort',toposort(relations));
  return relations;

}


function toposort (nodes) {
  // Test if a node got any icoming edge
  function hasIncomingEdge(list, node) {
    for (var i = 0, l = list.length; i < l; ++i) {
      if (list[i].links == null || list[i].links.indexOf(node.id) != -1) {//contains
        return true;
      }
    }
    return false;
  };
 
  // Kahn Algorithm
  var L = [],
      S = nodes.filter(function(node) {
        return !hasIncomingEdge(nodes, node);
      }),
      n = null;
 
  while(S.length) {
    // Remove a node n from S
    n = S.pop();
    // Add n to tail of L
    L.push(n);
 
    var i = n.links.length;
    while (i--) {
      // Getting the node associated to the current stored id in links
      var m = nodes.find(function(nodes_){
        return nodes_.id == n.links[i];
      });
 
      // Remove edge e from the graph
      n.links.pop();
 
      if (!hasIncomingEdge(nodes, m)) {
        S.push(m);
      }
    }
  }
 
  // If any of them still got links, there is cycle somewhere
  var nodeWithEdge = nodes.find(function(node) {
    return node.links.length !== 0;
  });
 
  return (nodeWithEdge) ? null: L;
}
