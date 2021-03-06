function global_entropy() {
	var calculated_g_e; // number

	var all_nodes = cy.nodes();

	var pairwise_entropies = [];
	for (var i = 0; i < all_nodes.length; i++) {
		for (var j = i+1; j < all_nodes.length; j++) {
			pairwise_entropies.push(pairwise_entropy(i, j));
		}
	}

	var sum_of_entropies = 0;
	for (var k = 0; k < pairwise_entropies.length; k++) {
		sum_of_entropies = sum_of_entropies + pairwise_entropies[k];
	}

	calculated_g_e = sum_of_entropies / pairwise_entropies.length;
	
	return calculated_g_e;
}

var global_entropy_handler = function() {
	var g_e = global_entropy();

	var g_e_display = document.getElementById("g-e-display");
	g_e_display.innerHTML = g_e;
}

var render_g_e_component = function(container) {
	var g_e_container = document.getElementById(container);

	var g_e_instructions = document.createElement("p");
	g_e_instructions.innerHTML = "Calculate global entropy:";

	var g_e_button = document.createElement("button");
	g_e_button.setAttribute("id", "calculate-g-e");
	g_e_button.setAttribute("class", "customButtons");
	g_e_button.innerHTML = "calculate ge";

	var g_e_display = document.createElement("p");
	g_e_display.setAttribute("id", "g-e-display");

	g_e_container.appendChild(g_e_instructions);
	g_e_container.appendChild(g_e_button);
	g_e_container.appendChild(g_e_display);

	var g_e_button = document.getElementById("calculate-g-e");
	g_e_button.addEventListener("click", global_entropy_handler);
}

render_g_e_component("g-e-div");