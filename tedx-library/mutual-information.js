function mutual_information(source_node, target_node) {
	var target_analysis = analyze_node(target_node);
	return target_analysis[1][source_node];
}

var mutual_information_handler = function() {
	var mi_source = document.getElementById("mi-source").value
	var mi_target = document.getElementById("mi-target").value
	
	var mi = mutual_information(mi_source, mi_target);

	var mi_display = document.getElementById("mi-display");
	mi_display.innerHTML = mi;
}

var mi_button = document.getElementById("calculate-mi");
mi_button.addEventListener("click", mutual_information_handler);

