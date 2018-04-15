function pairwise_entropy(source_node, target_node) {
	var calculated_p_e = 0;

	var source_target_mi = mutual_information(source_node, target_node);
	var target_source_mi = mutual_information(target_node, source_node);

	if (source_target_mi == "undefined") {
		source_target_mi = 0;
	}
	if (target_source_mi == "undefined") {
		target_source_mi = 0;
	}

	if (target_source_mi == source_target_mi) {
		calculated_p_e = 1
	} else if (target_source_mi > source_target_mi) {
		calculated_p_e = source_target_mi / target_source_mi;
	} else {
		calculated_p_e = target_source_mi / source_target_mi;
	}

	return calculated_p_e
}

var pairwise_entropy_handler = function() {
	var p_e_source = document.getElementById("p-e-source").value
	var p_e_target = document.getElementById("p-e-target").value
	
	var p_e = pairwise_entropy(p_e_source, p_e_target);

	var p_e_display = document.getElementById("p-e-display");
	p_e_display.innerHTML = p_e;
}

var p_e_button = document.getElementById("calculate-p-e");
p_e_button.addEventListener("click", pairwise_entropy_handler);

