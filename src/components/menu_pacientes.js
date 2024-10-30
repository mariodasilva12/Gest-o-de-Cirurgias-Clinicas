
import Styles from './menu_pacientes.module.css'

import TodoPacientes from './todoPacientes.js';
import CadastroPacientes from '../pages/pacientes/cadastro.js'
import { useState } from 'react';


function Menupacientes({nome,tipo}){
    const [pesquisa,setPesquisa] = useState('');
    const [opcao,setOpcao] = useState('nome');
    nome = pesquisa;
    tipo = opcao;
    return(
        <div className={Styles.topbar}>
           <div className={Styles.menutop}>
              <div className={Styles.pesquisa}>
                <input type='text' placeholder='Pesquisar paciente' onChange={(e)=>setPesquisa(e.target.value)} className={Styles.inputSearch}/>
               
                  <select onChange={(e)=>setOpcao(e.target.value)}  className={Styles.inputOption} >
                     <option value='nome'>Nome</option>
                     <option value='bi'>bi</option>
                    
                  </select>
                 <p className={Styles.p}><button className={Styles.button} onClick={()=><CadastroPacientes  />}>Adicionar  Pacientes</button></p> 
             </div>
          </div>
            <hr className={Styles.hr} /> 
            <TodoPacientes pesquisar_nome={pesquisa} tipo={tipo}/>
        </div>
        
    )
}

export default Menupacientes;