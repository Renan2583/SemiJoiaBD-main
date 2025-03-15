const express = require('express');
const multer = require("multer");
const path = require("path");

const InicioController = require('../controllers/InicioController');

const homeRouter = express.Router();




let ctrl = new InicioController();

homeRouter.get('/', ctrl.inicioView); //inicio da pagina
homeRouter.post('/cadastro', ctrl.inicio); //rota para o cadastro
homeRouter.get('/exibir', ctrl.exibeView);
homeRouter.post('/atualizar-vendedor', ctrl.atualizarVendedor);
homeRouter.post('/obterpecavendedor', ctrl.obterpecavendedor);

module.exports = homeRouter;