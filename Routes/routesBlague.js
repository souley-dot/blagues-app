///// Importation du module express  //////

const express=require('express');

/////// Importation de router /////

const router=express.Router();

/////Importation du fichier controller contenant les méthode ///////

const blagueController=require("../controllers/blaguesController")

/////// Route pour générer une blague //////////////
router.get('/random',blagueController.getRandomBlague);

/////// //////////  Les actions CRUD   /////////////////
router.get('/',blagueController.getAllBlagues); /////// Affiche toutes les blagues //////
router.get('/:id', blagueController.getByBlagueId) //////// Affiche une blague grâce à son id //////
router.post('/add', blagueController.createBlague) /////// Ajoute une nouvelle blague /////


module.exports=router;