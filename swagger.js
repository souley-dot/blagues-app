//// swagger
const swaggerJSDoc=require('swagger-jsdoc')

const swaggerUi=require('swagger-ui-express');

const options ={
    
    definition:{
        openapi: '3.0.0',
        info:{
            title:'API Blagues',
            version: '1.0.0',
            description:" C'est une API simple pour la gérer et afficher des balgues aléatoires ",
        },
        servers:[
            {
                url: 'https://blagues-app-1.onrender.com',
            },
            {
                url: 'http://localhost:3000' //// En local ////
            }
        ],
    },


    apis:['./Routes/*.js']

};
const swaggerSpec=swaggerJSDoc(options);

module.exports={swaggerUi,swaggerSpec}