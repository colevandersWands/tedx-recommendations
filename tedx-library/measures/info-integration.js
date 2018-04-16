function info_integration(node) {
	var calculated_i_i = 0;

	var absorbed_info = info_absorption(node);
	var contributed_info = info_contribution(node);

	calculated_i_i = (absorbed_info * contributed_info) * 100;

	return calculated_i_i
}

var info_integration_handler = function() {
	var i_i_node = document.getElementById("i-i-node").value
	
	var i_i = info_integration(i_i_node);

	var i_i_display = document.getElementById("i-i-display");
	i_i_display.innerHTML = i_i;
}



var render_i_i_component = function(container) {
	var ii_container = document.getElementById(container);

	var ii_instructions = document.createElement("p");
	ii_instructions.innerHTML = "Calculate info integration for node:";
	
	var ii_input = document.createElement("input");
	ii_input.setAttribute("id", "i-i-node");

	var ii_button = document.createElement("button");
	ii_button.setAttribute("id", "calculate-i-i");
	ii_button.setAttribute("class", "customButtons");
	ii_button.innerHTML = "calculate ii";

	var ii_display = document.createElement("p");
	ii_display.setAttribute("id", "i-i-display");

	ii_container.appendChild(ii_instructions);
	ii_container.appendChild(ii_input);
	ii_container.appendChild(ii_button);
	ii_container.appendChild(ii_display);

	var i_i_button = document.getElementById("calculate-i-i");
	i_i_button.addEventListener("click", info_integration_handler);
}

render_i_i_component("i-i-div");

