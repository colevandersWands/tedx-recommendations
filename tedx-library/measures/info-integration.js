function info_integration(node) {
	var calculated_i_i = 0;

	var absorbed_info = info_absorption(node);
	var contributed_info = info_contribution(node);

	calculated_i_i = absorbed_info * contributed_info;

	var all_edges = cy.edges();
	calculated_i_i *= all_edges.length;

	return calculated_i_i
}

var info_integration_handler = function() {
	var i_i_node = document.getElementById("i-i-node").value
	
	var i_i = info_integration(i_i_node);

	var i_i_display = document.getElementById("i-i-display");
	i_i_display.innerHTML = i_i;
}

var i_i_button = document.getElementById("calculate-i-i");
i_i_button.addEventListener("click", info_integration_handler);

