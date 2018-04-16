function pre_recs(node) {
	var returner = {};

	var all_nodes = cy.nodes();

	var unsorted = [];
	for (var i = 0; i < all_nodes.length; i++) {
		if (i != node) {
			var i_a = mutual_information(all_nodes[i]._private.data.id, node);
			var new_result = {};
			new_result.key = i
			new_result.i_a = i_a;
			unsorted.push(new_result);
		}
	}
	var sorted = mergeSort(unsorted);
	sorted.reverse();

	returner.target = node;
	returner.results = sorted;

	return returner;
}

var pre_recs_handler = function() {
	var node = document.getElementById("pre-recs-node").value

	var pre_recs_result = pre_recs(node);
	// console.log(pre_recs)

	var prettier_pre_recs = [];
	for (var rank of pre_recs_result.results) {
		prettier_pre_recs.push(rank.key);
	}
	var prettier = {
		target: node,
		pre_recs: prettier_pre_recs
	}
	console.log(prettier)

	var pre_recs_display = document.getElementById("pre-recs-display");
	pre_recs_display.innerHTML = "inspect page for results";
}

var render_pre_recs_component = function(container) {
	
	var pre_recs_container = document.getElementById(container);

	var pre_recs_instructions = document.createElement("p");
	pre_recs_instructions.innerHTML = "Suggest pre-rec ranking for:";

	var pre_recs_input = document.createElement("input");
	pre_recs_input.setAttribute("id", "pre-recs-node");

	var pre_recs_button = document.createElement("button");
	pre_recs_button.setAttribute("id", "calculate-pre-recs");
	pre_recs_button.setAttribute("class", "customButtons");
	pre_recs_button.innerHTML = "order pre-recs";

	var pre_recs_display = document.createElement("p");
	pre_recs_display.setAttribute("id", "pre-recs-display");

	pre_recs_container.appendChild(pre_recs_instructions);
	pre_recs_container.appendChild(pre_recs_input);
	pre_recs_container.appendChild(pre_recs_button);
	pre_recs_container.appendChild(pre_recs_display);

	var pre_recs_button = document.getElementById("calculate-pre-recs");
	pre_recs_button.addEventListener("click", pre_recs_handler);

}

render_pre_recs_component("pre-recs-div");


