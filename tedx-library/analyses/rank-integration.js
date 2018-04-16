function integration_ranking() {
	var returner = [];

	var all_nodes = cy.nodes();

	var unsorted = [];
	for (var i = 0; i < all_nodes.length; i++) {
		var i_a = info_integration(all_nodes[i]._private.data.id);
		var new_result = {};
		new_result.key = i
		new_result.i_a = i_a;
		unsorted.push(new_result);
	}

	returner = mergeSort(unsorted);
	returner.reverse;

	return returner;
}

var integration_ranking_handler = function() {
	var i_r = integration_ranking();
	// console.log(i_r)

	var prettier_i_r = [];
	for (var rank of i_r) {
		prettier_i_r.push(rank.key);
	}
	console.log(prettier_i_r)

	var i_r_display = document.getElementById("i-r-display");
	i_r_display.innerHTML = "inspect page for results";
}

var render_i_r_component = function(container) {
	
	var i_r_container = document.getElementById(container);

	var i_r_instructions = document.createElement("p");
	i_r_instructions.innerHTML = "Calculate integration ranking:";

	var i_r_button = document.createElement("button");
	i_r_button.setAttribute("id", "calculate-i-r");
	i_r_button.setAttribute("class", "customButtons");
	i_r_button.innerHTML = "rank integration";

	var i_r_display = document.createElement("p");
	i_r_display.setAttribute("id", "i-r-display");

	i_r_container.appendChild(i_r_instructions);
	i_r_container.appendChild(i_r_button);
	i_r_container.appendChild(i_r_display);

	var i_r_button = document.getElementById("calculate-i-r");
	i_r_button.addEventListener("click", integration_ranking_handler);

}

render_i_r_component("i-r-div");


