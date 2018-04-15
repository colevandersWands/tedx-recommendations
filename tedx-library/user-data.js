var sampling_data = {
	db: {},
	nextID: 0,
	add_user: function(edges_placed, which_half) {
		this.db[this.nextID] = {};
		this.db[this.nextID].edges_placed = edges_placed;
		this.db[this.nextID].which_half = which_half;
		this.nextID++;
	},
	read_all: function() {
		return this.db;
	}
};