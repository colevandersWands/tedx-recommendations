function post_recs(node) {
	var returner = {};

	var all_nodes = cy.nodes();

	var unsorted = [];
	for (var i = 0; i < all_nodes.length; i++) {
		if (i != node) {
			var i_a = mutual_information(node, all_nodes[i]._private.data.id);
			var new_result = {};
			new_result.key = i
			new_result.i_a = i_a;
			unsorted.push(new_result);
		}
	}
	var sorted = mergeSort(unsorted);
	sorted.reverse();

	returner.source = node;
	returner.results = sorted;

	return returner;
}

var post_recs_handler = function() {
	var node = document.getElementById("post-recs-node").value

	var post_recs_result = post_recs(node);
	// console.log(post_recs)

	var postttier_post_recs = [];
	for (var rank of post_recs_result.results) {
		postttier_post_recs.push(rank.key);
	}
	var postttier = {
		target: node,
		post_recs: postttier_post_recs
	}
	console.log(postttier)

	var post_recs_display = document.getElementById("post-recs-display");
	post_recs_display.innerHTML = "inspect page for results";
}

var render_post_recs_component = function(container) {
	
	var post_recs_container = document.getElementById(container);

	var post_recs_instructions = document.createElement("p");
	post_recs_instructions.innerHTML = "Suggest post-rec ranking for:";

	var post_recs_input = document.createElement("input");
	post_recs_input.setAttribute("id", "post-recs-node");

	var post_recs_button = document.createElement("button");
	post_recs_button.setAttribute("id", "calculate-post-recs");
	post_recs_button.setAttribute("class", "customButtons");
	post_recs_button.innerHTML = "order post-recs";

	var post_recs_display = document.createElement("p");
	post_recs_display.setAttribute("id", "post-recs-display");

	post_recs_container.appendChild(post_recs_instructions);
	post_recs_container.appendChild(post_recs_input);
	post_recs_container.appendChild(post_recs_button);
	post_recs_container.appendChild(post_recs_display);

	var post_recs_button = document.getElementById("calculate-post-recs");
	post_recs_button.addEventListener("click", post_recs_handler);

}

render_post_recs_component("post-recs-div");



