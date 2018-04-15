function tally_sources(node_id) {
	var analyzed_node = cy.getElementById(node_id);
	var all_edges = analyzed_node.connectedEdges();

	var incoming_IDs = [];
	for (var i = 0; i < all_edges.length; i++) {
		if (all_edges[i]._private.data.source == node_id) {
			if (all_edges[i]._private.data.target == node_id) {
				incoming_IDs.push(i)
			}
		} else {
			incoming_IDs.push(i)
		}
	}

	var src_tally = {};
	for (var index of incoming_IDs) {
		if (typeof src_tally[all_edges[index]._private.data.source] == "number") {
			src_tally[all_edges[index]._private.data.source]++;
		} else {
			src_tally[all_edges[index]._private.data.source] = 1;
		}
	};

	return src_tally;
}
