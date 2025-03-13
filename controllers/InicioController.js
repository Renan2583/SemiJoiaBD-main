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
            cadastrarPeca.vendedor = req.body.vendedor;
            


            let resultado = await cadastrarPeca.cadastrar();

            if (resultado) {
                res.send({ ok: true, msg: 'Cadastrado com sucesso!' });
            } else {
                res.send({ ok: false, msg: 'Erro ao cadastrar!' });
            }
    
        }

        

    }
    async listarPorVendedor(req, res) {
        const vendedor = req.params.vendedor;
        
        try {
            const model = new inicioModel();
            const pecas = await model.listarPorVendedor(vendedor);
            
            console.log('Peças encontradas:', pecas); // Verifique aqui
            
            res.render('vendedores', { lista: pecas });
        } catch (error) {
            console.error("Erro ao buscar peças por vendedor:", error);
            res.status(500).json({ error: "Erro ao buscar peças" });
        }
    }
    
    
}

  

module.exports = InicioController;