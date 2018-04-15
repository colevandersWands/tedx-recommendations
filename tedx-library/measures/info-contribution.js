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

var i_c_button = document.getElementById("calculate-i-c");
i_c_button.addEventListener("click", info_contribution_handler);

