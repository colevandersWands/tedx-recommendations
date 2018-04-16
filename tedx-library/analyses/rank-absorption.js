function absorption_ranking() {
	var returner = [];

	var all_nodes = cy.nodes();

	var unsorted = [];
	for (var i = 0; i < all_nodes.length; i++) {
		var i_a = info_absorption(all_nodes[i]._private.data.id);
		var new_result = {};
		new_result.key = i
		new_result.i_a = i_a;
		unsorted.push(new_result);
	}

	returner = mergeSort(unsorted);
	returner.reverse()

	return returner;
}

var absorption_ranking_handler = function() {
	var a_r = absorption_ranking();
	console.log(a_r)

	var prettier_a_r = [];
	for (var rank of a_r) {
		prettier_a_r.push(rank.key);
	}
	console.log(prettier_a_r)

	var a_r_display = document.getElementById("a-r-display");
	a_r_display.innerHTML = "inspect page for results";
}

var render_a_r_component = function(container) {
	
	var a_r_container = document.getElementById(container);

	var a_r_instructions = document.createElement("p");
	a_r_instructions.innerHTML = "Calculate absorption ranking:";

	var a_r_button = document.createElement("button");
	a_r_button.setAttribute("id", "calculate-a-r");
	a_r_button.setAttribute("class", "customButtons");
	a_r_button.innerHTML = "rank absorption";

	var a_r_display = document.createElement("p");
	a_r_display.setAttribute("id", "a-r-display");

	a_r_container.appendChild(a_r_instructions);
	a_r_container.appendChild(a_r_button);
	a_r_container.appendChild(a_r_display);

	var a_r_button = document.getElementById("calculate-a-r");
	a_r_button.addEventListener("click", absorption_ranking_handler);

}

render_a_r_component("a-r-div");


