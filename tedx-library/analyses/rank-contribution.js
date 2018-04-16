function contribution_ranking() {
	var returner = [];

	var all_nodes = cy.nodes();

	var unsorted = [];
	for (var i = 0; i < all_nodes.length; i++) {
		var i_a = info_contribution(all_nodes[i]._private.data.id);
		var new_result = {};
		new_result.key = i
		new_result.i_a = i_a;
		unsorted.push(new_result);
	}

	returner = mergeSort(unsorted);
	returner.reverse();

	return returner;
}

var contribution_ranking_handler = function() {
	var c_r = contribution_ranking();
	// console.log(c_r)

	var prettier_c_r = [];
	for (var rank of c_r) {
		prettier_c_r.push(rank.key);
	}
	console.log(prettier_c_r)

	var c_r_display = document.getElementById("c-r-display");
	c_r_display.innerHTML = "inspect page for results";
}

var render_c_r_component = function(container) {
	
	var c_r_container = document.getElementById(container);

	var c_r_instructions = document.createElement("p");
	c_r_instructions.innerHTML = "Calculate contribution ranking:";

	var c_r_button = document.createElement("button");
	c_r_button.setAttribute("id", "calculate-c-r");
	c_r_button.setAttribute("class", "customButtons");
	c_r_button.innerHTML = "rank contribution";

	var c_r_display = document.createElement("p");
	c_r_display.setAttribute("id", "c-r-display");

	c_r_container.appendChild(c_r_instructions);
	c_r_container.appendChild(c_r_button);
	c_r_container.appendChild(c_r_display);

	var c_r_button = document.getElementById("calculate-c-r");
	c_r_button.addEventListener("click", contribution_ranking_handler);

}

render_c_r_component("c-r-div");


