
import { useState } from "react";
import Styles from './cadastro.module.css'




function Cadastro_pacientes(){

    var [nome,setNome]= useState('');
    var [nascimento,setNascimento]= useState('');
    var [bi,setBI]= useState('');
    var [endereco,setMorada]= useState('');
    var [telefone,setTelefone]= useState('');
    var [peso,setPeso]= useState('');
    var [altura,setAltura]= useState('');
    var [genero,setGenero]= useState('Masculino');

    async function Cadastrar(){

        
         var idade = '18';
         var imc = '20'; 
         var codigo ='200';
             alert(nome+"+"+endereco);
      
       
         //default,'${nome}','${nascimento}','${genero}','${telefone}','${endereco}','${bi}','${idade}','${peso}','${imc}','${altura}','${genero}','${codigo}'
        const req = await fetch(`http://localhost:4000/adicionar/pacientes/${nome},${nascimento},${telefone},${endereco},${bi},${idade},${peso},${imc},${altura},${genero},${codigo}`,
            {
               method:'POST',
               headers: {
                'content-type':'aplication/json'
               },
           
            }
        
        )
        const res = await req.json();
        console.log(res);
        alert('Cadastrado com sucesso!');
    }
   

    return (
        <div className={Styles.cadastro}>
            <div className={Styles.formulario}>
                <h2 className={Styles.titulo}>Cadastro de Pacientes</h2>
                <div>
                    <p className={Styles.p}>Nome do Paciente</p>
                    <input className={Styles.input} type="text" placeholder="Nome" onChange={(e)=>setNome(e.target.value)} /><br />
                    <p className={Styles.p}>Data de Nascimento</p>
                    <input className={Styles.input} type="date" onChange={(e)=>setNascimento(e.target.value)} /><br />
                    <p className={Styles.p}>Telefone</p>
                    <input className={Styles.input} type="number" maxLength={14} onChange={(e)=>setTelefone(e.target.value)}/><br />
                    <p className={Styles.p}>BI Nº</p>
                    <input className={Styles.input} type="text" placeholder="" maxLength={14} onChange={(e)=>setBI(e.target.value)}/><br />
                    <p className={Styles.p}>Morada</p>
                    <input className={Styles.input} type="text"  onChange={(e)=>setMorada(e.target.value)} /><br />
                    <p className={Styles.p}>Peso(kg)</p>
                    <input className={Styles.input} type="number"  onChange={(e)=>setPeso(e.target.value)} /><br />
                    <p className={Styles.p}>Altura(m)</p>
                    <input className={Styles.input}  type="number" onChange={(e)=>setAltura(e.target.value)} /><br />
                    <p className={Styles.p}>Gênero</p>
                    <select className={Styles.input} onChange={(e)=>setGenero(e.target.value)}>
                        <option value={'Masculino'}>Masculino</option>
                        <option value={'Femenino'}>Femenino</option>
                    </select>
                    
                    <br />
                    <button className={Styles.button} id="btnCadastrar" onClick={(()=>{Cadastrar()})}>Cadastrar Paciente</button>
                </div>
            </div>

        </div>
    )
}

export default Cadastro_pacientes;