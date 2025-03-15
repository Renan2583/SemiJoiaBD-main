const inicioModel = require('../models/InicioModel');
const multer = require('multer');
const path = require('path');

class InicioController {
    async inicioView(req, res) {
        let listarTudo = new inicioModel();
        listarTudo = await listarTudo.listar();
        res.render('inicio', {lista: listarTudo})
    }

    async exibeView(req,res){
        let listarTudo = new inicioModel();
        listarTudo = await listarTudo.listar();

        res.render('exibir', {lista: listarTudo})
    }
    
    async inicio(req, res) {
        let ok;
        
        
        if (req.body.nome  && req.body.precocompra && req.body.precovenda && req.body.quant) {
            let cadastrarPeca = new inicioModel();
            cadastrarPeca.nome = req.body.nome;
            cadastrarPeca.fornecedor = req.body.fornecedor;
            cadastrarPeca.precocompra = req.body.precocompra;
            cadastrarPeca.precovenda = req.body.precovenda;
            cadastrarPeca.quant = req.body.quant;
            
            let resultado = await cadastrarPeca.cadastrar();

            if (resultado) {
                res.send({ ok: true, msg: 'Cadastrado com sucesso!' });
            } else {
                res.send({ ok: false, msg: 'Erro ao cadastrar!' });
            }
    
        }

    }
    async atualizarVendedor(req, res) {
        const { id, vendedor } = req.body;
    
        if (!id || !vendedor) {
            return res.status(400).json({ success: false, message: "ID e Vendedor são obrigatórios." });
        }
    
        const resultado = await new inicioModel().atualizarVendedor(id, vendedor);
        
        if (resultado.success) {
            res.json({ success: true });
        } else {
            res.status(500).json({ success: false, message: "Erro ao atualizar o vendedor." });
        }
    }


}

  

module.exports = InicioController;