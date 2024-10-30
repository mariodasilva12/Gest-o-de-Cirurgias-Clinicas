


import { Link} from 'react-router-dom';
import Styles from './dashboard.module.css'





function Dashboard(){

    // adiquirindo as imagens da pasta img

    var imagem_menu_aberto= 'assets/img/menu-aberto.png';
    var imagem_dashboard= 'assets/img/casa.png';
    var imagem_paciente_medico= 'assets/img/paciente-medico.png';
    var imagem_configuracao = 'assets/img/configuracoes.png';
    var imagem_sair = 'assets/img/sair.png';

    let list = document.querySelectorAll('.navigation .li');
    function activelink(){

       
        list.forEach(item=>{
               item.classList.remove('hovered');
        });
        this.classList.add('hovered');


     
    }

    list.forEach(item => item.addEventListener('mouseover',activelink));

    return(
        <div className= {Styles.menu}>

           <div className={Styles.container}>
              <div className={Styles.navigation}>
              <nav className={Styles.nav}>
          
                 <ul className={Styles.ul}>
       
                    <li className={Styles.li}>

                        
                        <Link  to='' className={Styles.link}>
                        <span className={Styles.icon}><img src={imagem_menu_aberto} className={Styles.img} alt='' /></span>
                        <span className={Styles.title}> Clínica Cirúrgica</span>
                        </Link>
                    </li>
                    
               
                    <li className={Styles.li}> 
                        <Link  to='/' className={Styles.link} id={Styles.active}>
                        <span className={Styles.icon}><img src={imagem_dashboard} className={Styles.img} alt='' /></span>
                        <span className={Styles.title}> Dashboard</span>
                        </Link>
                    </li>
                    <li className={Styles.li}>
                        
                        <Link exact to='/consultas' className={Styles.link}>
                        <span className={Styles.icon}>xxx</span>
                        <span className={Styles.title}> Consultas</span>
                        </Link>
                    </li>
                    <li className={Styles.li}>
                        
                        <Link  to='/pacientes' className={Styles.link}>
                        <span className={Styles.icon}><img src={imagem_paciente_medico} className={Styles.img} alt='' /></span>
                        <span className={Styles.title}> Pacientes</span>
                        </Link>
                    </li>
                    <li className={Styles.li}>
                        
                        <Link  to='/relatorios' className={Styles.link}>
                        <span className={Styles.icon}>xxx</span>
                        <span className={Styles.title}> Relatórios</span>
                        </Link>
                    </li>
                    <li className={Styles.li}>
                        
                        <Link to='/configuracoes' className={Styles.link}>
                        <span className={Styles.icon}><img src={imagem_configuracao} className={Styles.img} alt='' /></span>
                        <span className={Styles.title}> Configurações</span>
                       
                        </Link>
                    </li>
                    <li className={Styles.li}>
                        
                        <Link  to='/sair' className={Styles.link}>
                        <span className={Styles.icon}><img src={imagem_sair} className={Styles.img} alt='' /></span>
                        <span className={Styles.title}> Sair</span>
                        </Link>
                    </li>
             
              
              
                </ul>
              
                </nav>
               </div>
            </div>
         
        </div>
    )
}

export default Dashboard;