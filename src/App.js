

import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';

import Home from './pages/home.js';
import Consultas from './pages/consultas.js';
import Pacientes from './pages/pacientes.js'
import Relatorios from './pages/relatorios.js';
import Consfiguracoes from './pages/configuracoes.js';
import Sair from './pages/sair.js'

function App() {


  return (
    <div className="App">
 
       
      

        <BrowserRouter >    
    
           <Routes>
                    <Route  exact path='/' element ={<Home />} />   
                    <Route  path='/consultas' element={ <Consultas/> }/>
                    <Route  path='/pacientes' element={ <Pacientes/> }/>
                    <Route  path='/relatorios' element={ <Relatorios/> }/>   
                    <Route  path='/configuracoes' element={ <Consfiguracoes/> }/>
                    <Route  path='/sair' element={ <Sair/> }/>
            </Routes>
          
      </BrowserRouter>
        

    </div>
  );
}

export default App;

