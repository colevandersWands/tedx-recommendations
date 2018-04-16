function similarity_to(node) {
	var returner = {};

	var all_nodes = cy.nodes();

	var unsorted = [];
	for (var i = 0; i < all_nodes.length; i++) {
		if (i != node) {
			var i_a = pairwise_entropy(all_nodes[i]._private.data.id, node);
			i_a += info_integration(all_nodes[i]._private.data.id);
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

var similarity_to_handler = function() {
	var node = document.getElementById("similarity-to-node").value

	var similarity_to_result = similarity_to(node);
	// console.log(similarity_to)

	var prettier_similarity_to = [];
	for (var rank of similarity_to_result.results) {
		prettier_similarity_to.push(rank.key);
	}
	var prettier = {
		target: node,
		similarity_to: prettier_similarity_to
	}
	console.log(prettier)

	var similarity_to_display = document.getElementById("similarity-to-display");
	similarity_to_display.innerHTML = "inspect page for results";
}

var render_similarity_to_component = function(container) {
	
	var similarity_to_container = document.getElementById(container);

	var similarity_to_instructions = document.createElement("p");
	similarity_to_instructions.innerHTML = "Find most similar to:";

	var similarity_to_input = document.createElement("input");
	similarity_to_input.setAttribute("id", "similarity-to-node");

	var similarity_to_button = document.createElement("button");
	similarity_to_button.setAttribute("id", "calculate-similarity-to");
	similarity_to_button.setAttribute("class", "customButtons");
	similarity_to_button.innerHTML = "order similarity-to";

	var similarity_to_display = document.createElement("p");
	similarity_to_display.setAttribute("id", "similarity-to-display");

	similarity_to_container.appendChild(similarity_to_instructions);
	similarity_to_container.appendChild(similarity_to_input);
	similarity_to_container.appendChild(similarity_to_button);
	similarity_to_container.appendChild(similarity_to_display);

	var similarity_to_button = document.getElementById("calculate-similarity-to");
	similarity_to_button.addEventListener("click", similarity_to_handler);

}

render_similarity_to_component("similarity-to-div");


