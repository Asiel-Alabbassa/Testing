const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = {
  e2e: {
      
    watchForFileChanges : false, // ASIEL
    DefaultCommandTimeout : 3000, // ASIEL
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})  //asiel added this for the file downloads 
    },
  },
};

