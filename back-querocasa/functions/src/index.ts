import * as admin from 'firebase-admin';

let serviceAccount = require('PATHKEYgoesHere');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'firebaseURLgoesHERE'
});


import * as functions from 'firebase-functions';
import * as express from 'express';
import { userController, contratosImoveisController, postsImoveisController } from './controllers/exportControllers';
import { app } from 'firebase-admin';
var cors = require('cors');

let appApi = express();
let appUsers = express();
let appContratos = express();
let appPosts = express();

appApi.use(cors());
appUsers.use(cors());
appContratos.use(cors());
appPosts.use(cors());

/* appApi.get('/', (req, res) => {
  res.send(`STATUS: Aplicação online em ${new Date()}`);
}); */

appUsers.get('/:idUser', async (req, res) => {
  res.json(await userController.showUser(req.params.idUser));
});
appUsers.route('/')
  .get(async (req, res) => { res.json(await userController.getUsers()) })
  .post(async (req, res) => { res.json(await userController.storeUser(req.body)) })
  .put(async (req, res) => { res.json(await userController.updateUser(req.body)) })
  .delete(async (req, res) => { res.json(await userController.deleteUser(req.body.id)) });

appContratos.get('/:register', async (req, res) => {
    res.json(await contratosImoveisController.showContrato(req.params.register));
  });
appContratos.route('/')
  .get(async (req, res) => { res.json(await contratosImoveisController.getContratos()) })
  .post(async (req, res) => { res.json(await contratosImoveisController.storeContrato(req.body)) })
  .put(async (req, res) => { res.json(await contratosImoveisController.updateContrato(req.body)) })
  .delete(async (req, res) => { res.json(await contratosImoveisController.deleteContrato(req.body.register)) });

appPosts.get('/:id', async (req, res) => {
  res.json(await postsImoveisController.showPost(req.params.id));
});
appPosts.route('/')
  .get(async (req, res) => { res.json(await postsImoveisController.getPosts()) })
  .post(async (req, res) => { res.json(await postsImoveisController.storePost(req.body)) })
  .put(async (req, res) => { res.json(await postsImoveisController.updatePost(req.body)) })
  .delete(async (req, res) => { res.json(await postsImoveisController.deletePost(req.body.id)) });

exports.api = functions.https.onRequest(appApi);
exports.users = functions.https.onRequest(appUsers);
exports.contratos_imoveis = functions.https.onRequest(appContratos);
exports.posts_imoveis = functions.https.onRequest(appPosts);