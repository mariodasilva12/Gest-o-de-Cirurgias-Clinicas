import Dashboard from "./dashboard.js";
import CadastrarPaciente from './pacientes/cadastro.js'
import Styles from './home.module.css'
function home({active}){

    return(
        <div className={Styles.home}>
       
   
          
           <Dashboard  />
           <CadastrarPaciente />
          
        </div>
    )
}

export default home;