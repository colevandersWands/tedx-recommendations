function play_list_generator(node) {
	var returner = [];


	return returner;
};

var play_list_handler = function() {
	var node_to_play_list = document.getElementById("node-to-play-list").value
	
	var play_list = play_list_generator(node_to_play_list);

	var play_list_string = JSON.stringify(/*play_list*/)
	var play_list_display = document.getElementById("play-list-display");
	play_list_display.innerHTML = play_list_string;
}

var play_list_button = document.getElementById('play-list-button');
play_list_button.addEventListener("click", play_list_handler);