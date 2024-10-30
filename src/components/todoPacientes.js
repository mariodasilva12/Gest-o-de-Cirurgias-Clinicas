

import Styles from './todoPacientes.module.css'
import { useState,useEffect } from 'react';

function TodoPacientes({pesquisar_nome,tipo})
{
    
     // o tempo de espera para uma pesquisa   1000 = 1m
     var tempo =500;


    const [pacientes,setPacientes] = useState([]);
    var mensagem ='Pesquisa não encontrada no sistema';
    async function deletePaciente(id){

        const user_id=id;

    //deletar um paciente na base de dados
    const req_dados = await fetch(`http://localhost:4000/delete/dadosclinicos/pacientes/${user_id}`,
        {
            method:'DELETE',
            headers:{
                "content-type":"application/json"
            }
        })
    const res_dados = await req_dados.json();
    console.log(res_dados);
        
        //deletar um paciente na base de dados
        const req = await fetch(`http://localhost:4000/delete/pacientes/${user_id}`,
            {
                method:'DELETE',
                headers:{
                    "content-type":"application/json"
                }
            })
        const res = await req.json();
        console.log(res);
        
       
            // funcao de tempo de espera para visualizar a consulta 
             setTimeout(()=>{
                 getPacientes('')
             },tempo);
        }
    async function getPacientes(nome,tipo){

        if(nome ===""){    
        const req = await fetch('http://localhost:4000/pacientes',
            {
                method:'GET',
                headers:{
                    "content-type":"application/json"
                }

            }
       


        )
        const res = await req.json();
       setPacientes(res);
    }
    else{

        if(tipo==='nome'){
        const req = await fetch(`http://localhost:4000/pacientes/${nome}`,
            {
                method:'GET',
                headers:{
                    "content-type":"application/json"
                }

            }
     


        )
    
    
        const res = await req.json();
       setPacientes(res);
    
     }
     else if(tipo ==='bi'){
        const req = await fetch(`http://localhost:4000/pacientes/bi/${nome}`,
            {
                method:'GET',
                headers:{
                    "content-type":"application/json"
                }

            }
     


        )
    
    
        const res = await req.json();
       setPacientes(res);
    
     }
       
    }

   
    }

 

    useEffect(()=>{
       // funcao de tempo de espera para visualizar a consulta 
        setTimeout(()=>{
            getPacientes(pesquisar_nome,tipo)
    },tempo)
},[pesquisar_nome,tempo,tipo]);

    return (
        <div>
           <table className={Styles.table}>
            {
                pacientes.length <0 ?(
                    mensagem='Nenhum paciente cadastrado'
                ):
                (
                    <></>
                )
            }
            {pacientes.length ? (
              <thead>
                <th>Nome</th>
                <th>Género</th>
                <th>Idade</th>
                <th>Peso</th>
                <th>Altura</th>
                 <th>IMC</th>
                <th>Acções</th>
                
            </thead>
            ):
            
                <p>{mensagem}</p>
                
               
            }
            <tbody>
            
           {
           pacientes.length>0 && pacientes.map((paciente,index)=>{
                   return <tr className={Styles.tr} key={index}>
                    <td className={Styles.td}>{paciente.nome}</td>
                    <td className={Styles.td}>{paciente.sexo}</td>
                    <td className={Styles.td}>{paciente.idade}</td>
                    <td className={Styles.td}>{paciente.peso} Kg</td>
                    <td className={Styles.td}>{paciente.altura} m</td>
                    <td className={Styles.td}>{paciente.imc}</td>
                    <td className={Styles.td}>
                        <button id={Styles.exames} className={Styles.acoes}>Exames</button>
                        <button id={Styles.historico} className={Styles.acoes}>Historico</button>
                        <button id={Styles.editar} className={Styles.acoes}>Editar</button>
                        <button id={Styles.eliminar} className={Styles.acoes} onClick={()=>deletePaciente(paciente.id)}>Eliminar</button>
                    </td>
                </tr>
            })
            }
            </tbody>
           </table>
        </div>
    )
}

export default TodoPacientes;