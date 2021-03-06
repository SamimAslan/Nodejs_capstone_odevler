import swaggerAutogenConstructor from 'swagger-autogen';
const swaggerAutogen = swaggerAutogenConstructor();

const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       
            name: "X-API-KEY",  
            description: "any description..."
        }
    },
    definitions: {
        Movie:     {
            "id": 8008,
            "name": "Inception",
            "year": 2010
        },
        
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')          
})