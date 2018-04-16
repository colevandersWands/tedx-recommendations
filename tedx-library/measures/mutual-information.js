function mutual_information(source_node, target_node) {
	var mi; // number

	var target_analysis = node_contributions(target_node);
	
	if (target_analysis[1][source_node] == undefined) {
		mi = 0;
	} else {
		mi = target_analysis[1][source_node];
	};

	return mi;
}

var mutual_information_handler = function() {
	var mi_source = document.getElementById("m-i-source").value
	var mi_target = document.getElementById("m-i-target").value
	
	var mi = mutual_information(mi_source, mi_target);

	var mi_display = document.getElementById("m-i-display");
	mi_display.innerHTML = mi;
}

var render_m_i_component = function(container) {
	var m_i_container = document.getElementById(container);

	var m_i_instructions = document.createElement("p");
	m_i_instructions.innerHTML = "Calculate mutual information from:";
	
	var m_i_input_1 = document.createElement("input");
	m_i_input_1.setAttribute("id", "m-i-source");

	var m_i_input_2 = document.createElement("input");
	m_i_input_2.setAttribute("id", "m-i-target");

	var m_i_button = document.createElement("button");
	m_i_button.setAttribute("id", "calculate-m-i");
	m_i_button.setAttribute("class", "customButtons");
	m_i_button.innerHTML = "calculate mi";

	var m_i_display = document.createElement("p");
	m_i_display.setAttribute("id", "m-i-display");

	m_i_container.appendChild(m_i_instructions);
	m_i_container.appendChild(m_i_input_1);
	m_i_container.appendChild(m_i_input_2);
	m_i_container.appendChild(m_i_button);
	m_i_container.appendChild(m_i_display);

	var mi_button = document.getElementById("calculate-m-i");
	mi_button.addEventListener("click", mutual_information_handler);
}

render_m_i_component("m-i-div");
