const Database = require("../utils/database");
const db = new Database();

db.ExecutaComando('SELECT 1', [])
    .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

    db.ExecutaComando('SELECT * FROM tb_pecas WHERE id = 370', [])
    .then((resultado) => console.log('Resultado das peças:', resultado))
    .catch((err) => console.error('Erro ao consultar tb_pecas:', err));


class inicioModel {
  #id;
  #nome;
  #fornecedor;
  #precocompra;
  #precovenda;
  #quant;
  #vendedor;

  constructor(id, nome, fornecedor, precocompra, precovenda, quant,vendedor) {
    this.#id = id;
    this.#nome = nome;
    this.#fornecedor = fornecedor;
    this.#precocompra = precocompra;
    this.#precovenda = precovenda;
    this.#quant = quant;
    this.#vendedor = vendedor;
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get fornecedor() {
    return this.#fornecedor;
  }
  get precocompra() {
    return this.#precocompra;
  }
  get precovenda() {
    return this.#precovenda;
  }
  get quant() {
    return this.#quant;
  }

  get vendedor() {
    return this.#vendedor;
  }

  set id(value) {
    this.#id = value;
  }

  set nome(value) {
    this.#nome = value;
  }

  set fornecedor(value) {
    this.#fornecedor = value;
  }

  set precocompra(value) {
    this.#precocompra = value;
  }

  set precovenda(value) {
    this.#precovenda = value;
  }

  set quant(value) {
    this.#quant = value;
  }

  set vendedor(value) {
    this.#vendedor = value;
  }


  async cadastrar() {
    let sql = `INSERT INTO tb_pecas (peca_nome, peca_forn, peca_prpg, peca_prvd, peca_qnt) VALUES (?, ?, ?, ?, ?)`;
    let valores = [this.#nome, this.#fornecedor, this.#precocompra, this.#precovenda, this.#quant];

    console.log("Tentando inserir:", valores); // Verifica os valores antes de salvar

    try {
        let resultado = await db.ExecutaComandoNonQuery(sql, valores);
        console.log("Resultado do banco:", resultado);
        return resultado;
    } catch (error) {
        console.error("Erro ao inserir no banco:", error);
        return { ok: false, msg: "Erro ao cadastrar no banco." };
    }
}

async atualizarVendedor(id, vendedor) {
  try {
      await db.ExecutaComando('UPDATE tb_pecas SET peca_vendedor = ? WHERE id = ?', [vendedor, id]);
      return { success: true };
  } catch (error) {
      console.error('Erro ao atualizar vendedor:', error);
      return { success: false, error };
  }
}

async listar () {
  let sql = `select * from tb_pecas`;

  let resultado = await db.ExecutaComando(sql);
  let listaCadastro = [];
  for(let registro of resultado) {
      listaCadastro.push(new inicioModel(
          registro['id'],
          registro['peca_nome'],
          registro['peca_forn'],
          registro['peca_prpg'],
          registro['peca_prvd'],
          registro['peca_qnt'],
          registro['peca_vendedor']
      ));
  }
  return listaCadastro;
  
  
}

}

  

module.exports = inicioModel;
