const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports =  defineConfig ({
    e2e: {
        baseUrl: 'https://petstore.swagger.io/v2',
        specPattern: "cypress/support/e2e",
        supportFile: false
    },
    env:{
        username: 'Andika123456',
        password: 'test123456'
    }
})