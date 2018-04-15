function integrated_info(node) {
	var calculated_i_i = 0;

	var analysis = node_contributions(node);

	var integration_sum = 0;
	for (var contributor in analysis[1]) {
		integration_sum += analysis[0][contributor] * analysis[1][contributor]
	}

	var all_edges = cy.edges();
	calculated_i_i = integration_sum / all_edges.length;

	return calculated_i_i
}

var integrated_info_handler = function() {
	var i_i_node = document.getElementById("i-i-node").value
	
	var i_i = integrated_info(i_i_node);

	var i_i_display = document.getElementById("i-i-display");
	i_i_display.innerHTML = i_i;
}

var i_i_button = document.getElementById("calculate-i-i");
i_i_button.addEventListener("click", integrated_info_handler);

