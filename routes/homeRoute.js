const express = require('express');
const multer = require("multer");
const path = require("path");

const InicioController = require('../controllers/InicioController');

const homeRouter = express.Router();




let ctrl = new InicioController();

homeRouter.get('/', ctrl.inicioView); //inicio da pagina
homeRouter.post('/cadastro', ctrl.inicio); //rota para o cadastro
homeRouter.get('/exibir', ctrl.exibeView);
homeRouter.get('/vendedores', (req, res) => {
    res.render('vendedores');  // Renderiza o arquivo vendedores.ejs
});






module.exports = homeRouter;