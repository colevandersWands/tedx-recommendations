function tally_targets(node_id) {
	var analyzed_node = cy.getElementById(node_id);
	var all_edges = analyzed_node.connectedEdges();

	var outgoing_IDs = [];
	for (var i = 0; i < all_edges.length; i++) {
		if (all_edges[i]._private.data.target != node_id) {
			outgoing_IDs.push(i);
		} 
	}

	var target_tally = {};
	for (var index of outgoing_IDs) {
		if (typeof target_tally[all_edges[index]._private.data.target] == "number") {
			target_tally[all_edges[index]._private.data.target]++;
		} else {
			target_tally[all_edges[index]._private.data.target] = 1;
		}
	};

	return target_tally;
}
