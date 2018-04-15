var flat_network = {
  "nodes":[
    {
      "group": "nodes", 
      "data":{"id" : "0"}
    },{
      "group": "nodes", 
      "data" :{"id" : "1"}
    },{
      "group": "nodes", 
      "data" :{"id" : "2"}
    }
  ],
  "edges": [
    {
      "group": "edges", 
      "data" :{"source" : "1", "target" : "0", "id" : "e00"}
    }, {
      "group": "edges", 
      "data" :{"source" : "1", "target" : "1", "id" : "e01"}
    },{
      "group": "edges",
      "data" :{"source" : "1", "target" : "2", "id" : "e02"}
    },{
      "group": "edges", 
      "data" :{"source" : "2", "target" : "0", "id" : "e03"}
    },{
      "group": "edges",
      "data" :{"source" : "2", "target" : "1", "id" : "e04"}
    },{
      "group": "edges",
      "data" :{"source" : "2", "target" : "2", "id" : "e05"}
    },        {
      "group": "edges", 
      "data" :{"source" : "0", "target" : "0", "id" : "e06"}
    },{
      "group": "edges", 
      "data" :{"source" : "0", "target" : "1", "id" : "e07"}
    },{
      "group": "edges", 
      "data" :{"source" : "0", "target" : "2", "id" : "e08"}
    },
  ]
};