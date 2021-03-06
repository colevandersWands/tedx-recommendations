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

	var num_contributions = 0;
	for (var source in src_tally) {
		num_contributions += src_tally[source];
	}

	var src_contributions = {};
	for (var source in src_tally) {
		src_contributions[source] = src_tally[source] / num_contributions;
	};


	src_tally.target = node_id;
	returner[0] = src_tally;
	returner[1] = src_contributions;

	return returner;
};


var node_contributions_handler = function() {
	var node_to_analyze = document.getElementById("node-to-analyze").value
	
	var analysis = node_contributions(node_to_analyze);

	console.log(analysis[1])
	var analysis_display = document.getElementById("n-c-display");
	analysis_display.innerHTML = "inspect page to view results";
};


var render_n_c_component = function(container) {
	var n_c_container = document.getElementById(container);

	var n_c_instructions = document.createElement("p");
	n_c_instructions.innerHTML = "Analyze node's contributors:";
	
	var n_c_input = document.createElement("input");
	n_c_input.setAttribute("id", "node-to-analyze");

	var n_c_button = document.createElement("button");
	n_c_button.setAttribute("id", "calculate-n-c");
	n_c_button.setAttribute("class", "customButtons");
	n_c_button.innerHTML = "calculate nc";

	var n_c_display = document.createElement("p");
	n_c_display.setAttribute("id", "n-c-display");

	n_c_container.appendChild(n_c_instructions);
	n_c_container.appendChild(n_c_input);
	n_c_container.appendChild(n_c_button);
	n_c_container.appendChild(n_c_display);

	var analyze_button = document.getElementById("calculate-n-c")
	analyze_button.addEventListener("click", node_contributions_handler)


}

render_n_c_component("n-c-div");


