function info_contribution(node) {
	var calculated_i_c = 0;

	var target_tally = tally_targets(node);

	var mi_contributions = {};
	for (var target in target_tally) {
		mi_contributions[target] = mutual_information(node, target);
	}

	var contributions_sum = 0;
	for (var target in mi_contributions) {
		contributions_sum += target_tally[target] * mi_contributions[target]
	}

	var all_edges = cy.edges();
	calculated_i_c = contributions_sum / all_edges.length;

	return calculated_i_c;
}

var info_contribution_handler = function() {
	var i_c_node = document.getElementById("i-c-node").value
	
	var i_c = info_contribution(i_c_node);

	var i_c_display = document.getElementById("i-c-display");
	i_c_display.innerHTML = i_c;
}

var render_i_c_component = function(container) {
	var i_c_container = document.getElementById(container);

	var i_c_instructions = document.createElement("p");
	i_c_instructions.innerHTML = "Analyze node's info contribution:";
	
	var i_c_input = document.createElement("input");
	i_c_input.setAttribute("id", "i-c-node");

	var i_c_button = document.createElement("button");
	i_c_button.setAttribute("id", "calculate-i-c");
	i_c_button.setAttribute("class", "customButtons");
	i_c_button.innerHTML = "calculate ic";

	var i_c_display = document.createElement("p");
	i_c_display.setAttribute("id", "i-c-display");

	i_c_container.appendChild(i_c_instructions);
	i_c_container.appendChild(i_c_input);
	i_c_container.appendChild(i_c_button);
	i_c_container.appendChild(i_c_display);

	var i_c_button = document.getElementById("calculate-i-c");
	i_c_button.addEventListener("click", info_contribution_handler);
}

render_i_c_component("i-c-div");