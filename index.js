/// Importation de express ////
const express=require('express');
//// On creation de l'application /////
const app=express();
///// Nous importons le fichier de configuration sequelize //////
const sepuelize=require('./Config/config.js');
///// Importation des fichier contenant nos routes //////
const blagueRoutes=require('./Routes/routesBlague');

///////////// Importation de cors //////////////////////////////////
const cors=require("cors");

///// Importation du modèle /////

const Blague=require('./Entity/blagues')

///// Les middlewares /////
app.use(cors({
    origin: "https://souley-dot.github.io/blagues-app-front"
}));
app.use(express.json())
app.use('/apiv1/blagues',blagueRoutes);

////// Le port sur lequel va tourner le server /////
const PORT = process.env.PORT || 3000;

///// La synchronisation avec la base puis démarrage du serveur ///
sepuelize.sync({alter:true}).then(async ()=>{

    app.listen(PORT,()=>{
        console.log(`This server is running on :http://localhost:${PORT}`)
    })


})