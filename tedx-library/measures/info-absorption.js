function info_absorption(node) {
	var calculated_i_a = 0;

	var analysis = node_contributions(node);

	var integration_sum = 0;
	for (var contributor in analysis[1]) {
		if (contributor != node) {
			integration_sum += analysis[0][contributor] * analysis[1][contributor]
		}
	}

	var all_edges = cy.edges();
	calculated_i_a = integration_sum / all_edges.length;

	return calculated_i_a
}

var info_absorption_handler = function() {
	var i_a_node = document.getElementById("i-a-node").value
	
	var i_a = info_absorption(i_a_node);

	var i_a_display = document.getElementById("i-a-display");
	i_a_display.innerHTML = i_a;
}


var render_i_a_component = function(container) {
	var i_a_container = document.getElementById(container);

	var i_a_instructions = document.createElement("p");
	i_a_instructions.innerHTML = "Analyze node's info absorbtion:";
	
	var i_a_input = document.createElement("input");
	i_a_input.setAttribute("id", "i-a-node");

	var i_a_button = document.createElement("button");
	i_a_button.setAttribute("id", "calculate-i-a");
	i_a_button.setAttribute("class", "customButtons");
	i_a_button.innerHTML = "calculate ia";

	var i_a_display = document.createElement("p");
	i_a_display.setAttribute("id", "i-a-display");

	i_a_container.appendChild(i_a_instructions);
	i_a_container.appendChild(i_a_input);
	i_a_container.appendChild(i_a_button);
	i_a_container.appendChild(i_a_display);

	var i_a_button = document.getElementById("calculate-i-a");
	i_a_button.addEventListener("click", info_absorption_handler);


}

render_i_a_component("i-a-div");