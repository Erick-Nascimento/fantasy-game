import '../../components/header/header.scss';
import  logo from '../../assets/img/logo.svg';
import moneyIcon from '../../assets/img/money-icon.svg';
import goldBallIcon from '../../assets/img/gold-ball-icon.svg'



function Header(){
    return(
        <header>
            <div className="headerContainer">
                <div className="shieldContainer">
                    <img src={logo} alt="The logotype app. A football shield with the letters FC"/>
                    <p>PiabetensesFC</p>
                </div>
                <div className="valuesFields">
                    <div className="moneyValue">
                        <div className="moneyValue_img">
                            <img src={moneyIcon} alt="Money Icon"/>
                        </div>
                        <span>R$20,00</span>
                    </div>
                    <div className="goldBallValue">
                        <div className="goldBallValue_img">
                            <img src={goldBallIcon} alt="Gold Ball Icon"/>
                        </div>
                        <span>10</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header