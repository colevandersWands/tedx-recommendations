function add_edge(source, target, is_directed){

   edgeCount = cy.edges().size()
   idNum = edgeCount
   setID = idNum.toString(),

   cy.add([{group: "edges",
            data: {"id": "e" + setID,
                   "source": source,
                   "target": target
                   }
             }]); // cy.add

   if (!is_directed) {
      setID++
      cy.add([{group: "edges",
              data: {"id": "e" + setID,
                     "source": target,
                     "target": source
                     }
               }]); // cy.add
   }
   
}; // addEdge

var add_edge_handler = function() {
  var source = document.getElementById("new-source").value
  var target = document.getElementById("new-target").value

  var is_directed = false;
  var is_directed_radio = document.getElementsByName('is-directed');
  if (is_directed_radio[0].checked == true) {
    is_directed = true;
  } 

  add_edge(source, target, is_directed);
}


var add_an_edge = document.getElementById("add-an-edge");


add_an_edge.addEventListener("click", add_edge_handler);

