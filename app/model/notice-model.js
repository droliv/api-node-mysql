const connect = require("../../config/connect");

class NoticeModel{

  getAll(callback){
        connect.query('SELECT * FROM noticias', (err, rows)=>{
            if (err) {
                console.log(err)
                return err
            }
            console.log("Sucesso!");
            return callback(rows)
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM noticias WHERE id_noticia = ?', id, (err, rows) => {
            if (err) {
                console.log(err)
                return err
            }
            else {
                console.log("Sucesso!");
                return callback(rows);
            }
        })
    }
    
    setNotice(noticia, callback){
        connect.query('INSERT INTO noticias set?', noticia, (err) => {
            if (err) {
                console.log(err);
                return callback(false)
            }
            else {
                console.log("insert success");
                return callback(true);
            }
        })
    }
    
    putNotice(noticia, id, callback){
        connect.query('UPDATE noticias set ? WHERE id_noticia = ?', [noticia, id], (err) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log("update success");
                return callback(true);
            }
        })
    }
    
    delete(id, callback){
        connect.query('DELETE FROM noticias WHERE id_noticia = ?', id, (err) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log("delete success");
                return callback(true);
            }
        })
    }
    
}

module.exports = NoticeModel
