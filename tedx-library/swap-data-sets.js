function swap_data_set(new_dataset) {
	var simpleStyle =  cytoscape.stylesheet().selector('node').css({
           'content': 'data(id)',
           'text-valign': 'center',
           'color': 'white',
           'text-outline-width': 2,
           'text-outline-color': '#888'
       }).selector('edge').css({
           // 'target-arrow-shape': 'triangle',
           'curve-style': 'segments',
           'control-point-step-size': '5px',
           'content': 'data(type)',
           'text-outline-color': '#FFFFFF',
           'text-outline-opacity': '1',
           'text-outline-width': 2,
           'text-valign': 'center',
           'color': '#777777',
           'width': '2px'
       }).selector(':selected').css({
           'background-color': 'black',
           'line-color': 'black',
           'target-arrow-color': 'black',
           'source-arrow-color': 'black',
           'color': 'black'
       })
	var $cy = $("#cy");
   $cy.cytoscape({
       elements: new_dataset,
       style: simpleStyle,
       showOverlay: false,
       minZoom: 0.1,
       maxZoom: 4.0,
       layout: {fit: true},
       ready: function() {
          cy = this;
            // catch mouse tap events, draw nodes at those spots
          // cy.on('tap', function(e) {
          //     if(e.cyTarget === cy) {
          //        var nextNodeID = cy.nodes().size().toString()
          //        offset = $cy.offset();
          //         position = {
          //            x: e.originalEvent.pageX - offset.left,
          //            y: e.originalEvent.pageY - offset.top
          //            };
          //         cy.add([{group: "nodes",
          //                   data: {"id":  "" + nextNodeID,
          //                          "resources": [],
          //                          "properties": []
          //                          },
          //                 renderedPosition: {x: position.x,
          //                                    y: position.y
          //                                    },
          //                 }]); // cy.add
          //         } // cyTarget === cy
          //     }); // cy.on

          } // ready
       }); // cy initializer: cytoscape
}


var flat_data_handler = function() {
	swap_data_set(flat_network);
}

var flat_data_button = document.getElementById("flat-data");
flat_data_button.addEventListener("click", flat_data_handler);


var stepped_data_handler = function() {
	swap_data_set(stepped_network);
}

var stepped_data_button = document.getElementById("stepped-data");
stepped_data_button.addEventListener("click", stepped_data_handler);


var edgeless_data_handler = function() {
	swap_data_set(edgeless_network);
}

var edgeless_data_button = document.getElementById("edgeless-data");
edgeless_data_button.addEventListener("click", edgeless_data_handler);
