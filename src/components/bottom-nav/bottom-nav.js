import './bottom-nav.scss'
import FooterBtn from './FooterButtons/footerBtn'
import Trophy from '../../assets/img/Footer-Icons/trophy.svg'
import MyLeagues from '../../assets/img/Footer-Icons/my-leagues.svg'
import Store from '../../assets/img/Footer-Icons/store.svg'
import QuizIcon from '../../assets/img/Footer-Icons/quiz.svg'
import UserIcon from '../../assets/img/Footer-Icons/user.svg'

function BottomNav(){
    return(
        <footer>
            <div className='footerContainer'>
                
                <FooterBtn 
                    link="/"
                    img={Trophy}
                    alt="Trophy Image"
                    text="Ligas"
                />

                <FooterBtn 
                    link="www.ligas.com.br"
                    img={MyLeagues}
                    alt="Trophy Image"
                    text="Minhas Ligas"
                />

                <FooterBtn 
                    link="www.ligas.com.br"
                    img={Store}
                    alt="Trophy Image"
                    text="Loja"
                />  

                <FooterBtn 
                    link="www.ligas.com.br"
                    img={QuizIcon}
                    alt="Trophy Image"
                    text="Quiz"
                /> 

                <FooterBtn 
                    link="www.ligas.com.br"
                    img={UserIcon}
                    alt="Trophy Image"
                    text="Minha Conta"
                /> 

            </div>
        </footer>
    )
}

export default BottomNav