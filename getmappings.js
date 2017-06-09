var client = require('./connection.js');

client.indices.getMapping({  
    index: 'gov',
    type: 'constituencies',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Constituency mappings:\n",response.gov.mappings.constituencies.properties);
    }
});

client.indices.getMapping({  
    index: 'gov',
    type: 'petitions',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log('Petition mappings:\n',response.gov.mappings.petitions.properties);
    }
});
