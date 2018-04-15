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

var i_a_button = document.getElementById("calculate-i-a");
i_a_button.addEventListener("click", info_absorption_handler);

