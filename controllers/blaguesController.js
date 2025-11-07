//////// Importation du fichier contenant les modèle //////

///const { Sequelize } = require("sequelize")

//////Importation de la base de données ////////
const sequelize = require('../Config/config');

///// Imoorttation des entity ///////////////
const blagues=require("../Entity/blagues")

////////// Méthode pour générer aléaytoirement pour ajouter une blague à la base /////////
exports.createBlague= async (req,resp)=>{
    try {

        const {question,response}=req.body;

        if ( !question || !response) {

            return resp.status(500).json("Données manquentes !")
        }
        const NouvelleBlague= await blagues.create({question,response});

        resp.status(200).json({"Nouvelle blague ajoutée":NouvelleBlague})
        
    } catch (error) {
        resp.status(500).json({"erreur": error.message})
        
    }
}

////////// Méthode d'affichage de toutes les blagues /////////

exports.getAllBlagues = async (req,resp)=>{
    try {
        const blague= await blagues.findAll();
        if(!blague){

            return resp.status(500).json("Aucune blague n'a été trouvée !!")
        }
        resp.status(200).json(blague)
        
    } catch (error) {
        
        resp.status(500).json({"erreur":error.message})
    }
}

////////// Méthode de consultation d'une blague par son id /////////

exports.getByBlagueId= async (req,resp)=>{

    try {
        ///// On recupère l'id grâce à l'objet req //////
        const id=parseInt(req.params.id)

        const blague= await blagues.findByPk(id);

        if(!blague) return resp.status(404).json("Aucune blague n'est trouvée ")

            resp.status(200).json(blague)

    } catch (error) {

        resp.status(500).json({"erreur":error.message})
        
    }
}
////////// Méthode pour générer aléaytoirement une blague à l'utilisateur /////////
exports.getRandomBlague = async (req , resp)=>{
    try {
        const blague= await blagues.findOne({order: sequelize.random()})
        if (!blague) {
            return resp.status(404).json({ message: "Aucune blague n'est trouver" })
        }
        resp.status(200).json(blague)

    } catch (err) {

        resp.status(500).json({error:err.message});
        
    }


}

