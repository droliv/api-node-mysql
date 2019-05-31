const model = require("../model/notice-model");

exports.get = (req, res) => {
    model.getAll((result)=>{
        if(result.length == 0){
            res.send("Não há resultados para esta consulta")
        }
        else{
            res.send(result);
        }
    })
}

exports.getone = (req, res) => {
    const id = req.params.id;
    model.getOne(id,(result)=>{
        if(result.length == 0){
            res.send("Não há resultados para esta consulta")
        }
        else{
            res.send(result);
        }
        
    })
}
exports.post = (req, res) => {
    const noticia = req.body;
    model.setNotice(noticia,(callback)=>{
        if(callback){
            res.send("Insert sucess!");
        }
        else{
            res.send("Insert Fail");
        }
    });
}

exports.put = (req, res) => {
    const noticia = req.body;
    const id = req.params.id;
    model.putNotice(noticia, id,(callback)=>{
        if(callback){
            res.send("Update sucess!");
        }
        else{
            res.send("Update Fail");
        }
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    model.delete(id, (callback)=>{
        if(callback){
            res.send("Delete sucess!");
        }
        else{
            res.send("Delete Fail");
        }
    });
}
