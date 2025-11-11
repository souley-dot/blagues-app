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

/////////////////////// les opérations CRUD ///////////////////////////
/**
 * @swagger
 * /apiv1/blagues/:
 *  get:
 *   summary: Retourne toutes les blagues
 *   tags:
 *       - Blagues
 *   responses:
 *      200:
 *        description: Toutes les blagues sont affichées
 *   content:
 *          application/json:
 *              schema:
 *                type: object
 *                properties:
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
router.get('/',blagueController.getAllBlagues); 
/**
 * @swagger
 * /apiv1/blagues/{id}:
 *   get:
 *     summary: Retourne une blague selon son ID
 *     tags:
 *       - Blagues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague à afficher
 *     responses:
 *       200:
 *         description: Une blague trouvée selon l'ID
 *         content:
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
 *       404:
 *         description: Aucune blague trouvée avec cet ID
 */
router.get('/:id', blagueController.getByBlagueId);
/**
 * @swagger
 * /apiv1/blagues/add:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags:
 *       - Blagues
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Pourquoi le football c'est rigolo ?"
 *               response:
 *                 type: string
 *                 example: "Parce que Thierry en rit"
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 *       400:
 *         description: Erreur de validation ou requête incorrecte
 */
router.post('/add', blagueController.createBlague);



module.exports=router;