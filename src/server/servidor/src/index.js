
import conexao from '../conexao/conexao.js';
import express from 'express';
import cors from 'cors';

const porta =4000;

conexao.connect(function(erro){
  if(erro) throw erro;
  console.log('Conexão ao banco de dados com sucesso!');
});
const app = express();
app.use(express.json());
app.use(cors());


app.get('/pacientes',(req,res)=>{
         
    var sql = `select * from pacientes where id order by id desc`;
    conexao.query(sql,(err,result)=>{
    
          if(err){
            return console.log('Erro na query');
          }
          else{

            res.json(result);
          }
    });
});

//selecionar as informações do paciente apartir do nome
app.get('/pacientes/:nome',(req,res)=>{
         
  const {nome} = req.params;
  var sql = `select * from pacientes where  nome  like  '%${nome}%';`;
  conexao.query(sql,(err,result)=>{
  
        if(err){
          return console.log('Erro na query');
        }
        else{

          res.json(result);
        }
  });
});

//selecionar as informações do paciente apartir do bi
app.get('/pacientes/bi/:bi',(req,res)=>{
         
  const {bi} = req.params;
  var sql = `select * from pacientes where  bi  like  '%${bi}%';`;
  conexao.query(sql,(err,result)=>{
  
        if(err){
          return console.log('Erro na query');
        }
        else{

          res.json(result);
        }
  });
});


app.get('/pacientes',(req,res)=>{
         
  var sql = `select * from pacientes where id order by id desc`;
  conexao.query(sql,(err,result)=>{
  
        if(err){
          return console.log('Erro na query');
        }
        else{

          res.json(result);
        }
  });
});
app.post('/adicionar/pacientes/:nome,:nascimento,:telefone,:endereco,:bi,:idade,:peso,:imc,:altura,:genero,:codigo',(req,res)=>{
       
const {nome} = req.params;
const {nascimento} = req.params;
const {telefone} = req.params;
const {endereco} = req.params;
const {bi} = req.params;
const {idade} = req.params;
const {peso} =req.params;
const {imc} = req.params;
const {altura} = req.params;
const {genero} = req.params;
const {codigo} = req.params;
var sql = `insert into pacientes values(default,'${nome}','${nascimento}','${telefone}','${endereco}','${bi}','${idade}','${peso}','${imc}','${altura}','${genero}','${codigo}')`;
conexao.query(sql,(err,result)=>{

      if(err){
        return console.log('Erro na query -->/add/pacientes/:nome,:nascimento,:genero,:telefone,:endereco,:bi,:idade,:peso,:imc,:altura,:genero,:codigo');
      }
      else{

        res.json(result);
      }
});
});


//rota deletar usuáriop


app.delete('/delete/pacientes/:id',(req,res)=>{
       
  const {id} = req.params;

  var sql = `delete from pacientes where id=${id}`;
  conexao.query(sql,(err,result)=>{
  
        if(err){
          return console.log('Erro na query --> /delete/pacientes/:id');
        }
        else{
  
          res.json('Paciente deletado com sucesso!');
        }
  });
  });
  app.delete('/delete/dadosclinicos/pacientes/:id',(req,res)=>{
       
    const {id} = req.params;
  
    var sql = `delete from dadosclinicos where idPaciente='${id}'`;
    conexao.query(sql,(err,result)=>{
    
          if(err){
            return console.log('Erro na query --> /delete/dadosclinicos/pacientes/:id');
          }
          else{
    
            res.json('Paciente deletado com sucesso!');
          }
    });
    });
    
  
app.listen(porta,()=>{
    console.log(`Servidor rodando na porta http://localhost:${porta}`)
});