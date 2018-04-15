function generate_edge(){
   nodeCount = cy.nodes().size()
   edgeCount = cy.edges().size()
   idNum = edgeCount
   setID = idNum.toString(),
   sourceNode = getRandomInt(0, nodeCount-1)
   targetNode = getRandomInt(0, nodeCount-1)
   cy.add([{group: "edges",
            data: {"id": "e" + setID,
                   "source": sourceNode,
                   "target": targetNode
                   }
             }]); // cy.add
  }; // addRandomEdge


var generate_edges_handler = function() {
	var num_edges = document.getElementById("num-edges").value
	
	for (var i = 0; i < num_edges; i++) {
		generate_edge();
	}
}

var generate_edges_button = document.getElementById("generate-edges");
generate_edges_button.addEventListener("click", generate_edges_handler);

