
seajs.config({

  alias: {
    'class': '1.0.0'
  }

})



seajs.use('./src/NodeJSProgrammer', function(NodeJSProgrammer) {

  this.NodeJSProgrammer = NodeJSProgrammer

})
