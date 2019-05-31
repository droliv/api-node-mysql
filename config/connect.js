const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

conexao.connect((err)=>{
    if(err) console.log(err)
    console.log("conectado ao banco!")
})
const create = `create table if not exists noticias(
  id_noticia int AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NULL,
  noticia TEXT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
  resumo VARCHAR(100) NULL,
  autor VARCHAR(30) NULL,
  data_noticia DATE NULL
)`;

conexao.query(create, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });



module.exports = conexao