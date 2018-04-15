/*
	node_contributions: Function 
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

function node_contributions(node_id) {
	var returner = [{},{}];

	var src_tally = tally_sources(node_id);
	console.log(src_tally)

	var src_contributions = {};
	for (var source in src_tally) {
		// console.log(src_tally[source], " / ", incoming_IDs.length)
		src_contributions[source] = src_tally[source] / Object.keys(src_tally).length;
	};

	src_tally.target = node_id;
	returner[0] = src_tally;
	returner[1] = src_contributions;

	return returner;
};


var node_contributions_handler = function() {
	var node_to_analyze = document.getElementById("node-to-analyze").value
	
	var analysis = node_contributions(node_to_analyze);

	var analysis_string = JSON.stringify(analysis[1])
	var analysis_display = document.getElementById("analysis-display");
	analysis_display.innerHTML = analysis_string;
};

var analyze_button = document.getElementById("analyze")
analyze_button.addEventListener("click", node_contributions_handler)





