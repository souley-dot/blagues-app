///// Importation du module express  //////

const express=require('express');

/////// Importation de router /////

const router=express.Router();

/////Importation du fichier controller contenant les méthode ///////

const blagueController=require("../controllers/blaguesController")
/**
 * @swagger
 * /apiv1/blagues/random:
 *   get:
 *     summary: Retourne une blague aléatoire
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *       content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 question:
 *                   type: string
 *                   example: "Pourquoi le football c'est rigolo ?"
 *                 response:
 *                   type: string
 *                   example: "Parce que Thierry en rit"
 */
router.get('/random',blagueController.getRandomBlague);
/////// //////////  Les actions CRUD   /////////////////

/**
 * @swagger
 * /apiv1/blagues/:
 *  get:
 *   summary: Retourne toutes les blagues.
 *   tags:
 *       - Afficheer toutes les blagues.
 *   responses:
 *      200:
 *        description: Toutes les blagues sont affichées.
 */
router.get('/',blagueController.getAllBlagues); 
/**
 * @swagger
 * /apiv1/blagues/:id:
 *  get:
 *   summary: Retourne toutes les blagues.
 *   tags:
 *       - Afficher une blague selon son ID.
 *   responses:
 *      200:
 *        description: Une blague affichée selon son ID.
 */

router.get('/:id', blagueController.getByBlagueId)
/**
 * @swagger
 * /apiv1/blagues/:
 *  post:
 *   summary: Retourne toutes les blagues.
 *   tags:
 *       - Ajouter une nouvelle blague.
 *   responses:
 *      201:
 *        description: Une nouvelle blague ajoutée .
 */
router.post('/add', blagueController.createBlague) /////// Ajoute une nouvelle blague /////


module.exports=router;