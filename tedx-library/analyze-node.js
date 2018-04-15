/*
	analyze_node: Function 
		args: 1
			node_id: Number, id of node to analyze
		return: array of objects
			src_tally: { id of source node : number of inputs from this node }
			src_contributions: { id of source : num of these inputs / total num inputs } 
		behavior:  this function computes a very crude approximation of mutual information 
			between a selected node's contributors and itself
				gathers all edges connected to target node
				creates an array of ids for all source nodes
					(ignores outgoing edges that are not loops)
				builds an object with src id's as keys, num of inputs as values (src_tally)
				builds an object with src id's as keys, % of input as values (src_contributions)
				returns [src_tally, src_contributions]

	(file also contains DOM handler and event listeners)
*/

function analyze_node(node_id) {
	var returner = [{},{}];

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

	var src_contributions = {};
	for (var source in src_tally) {
		// console.log(src_tally[source], " / ", incoming_IDs.length)
		src_contributions[source] = src_tally[source] / incoming_IDs.length;
	};

	src_tally.target = node_id;
	returner[0] = src_tally;
	returner[1] = src_contributions;

	return returner;
};

var analyze_node_handler = function() {
	var node_to_analyze = document.getElementById("node-to-analyze").value
	
	var analysis = analyze_node(node_to_analyze);

	var analysis_string = JSON.stringify(analysis[1])
	var analysis_display = document.getElementById("analysis_display");
	analysis_display.innerHTML = analysis_string;
};

var analyze_button = document.getElementById("analyze")
analyze_button.addEventListener("click", analyze_node_handler)





