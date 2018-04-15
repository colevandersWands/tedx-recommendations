function add_node(){
   idNum = cy.nodes().size(),
   setID = idNum.toString(),
   cy.add([{group: "nodes",
            data: {"id": setID,
                   "name": "added"
                   },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                },
             }]); // cy.add
   }; // addRandomNode

var add_node_handler = function() {
  add_node();
}


var add_node_button = document.getElementById("add-node");


add_node_button.addEventListener("click", add_node_handler);

