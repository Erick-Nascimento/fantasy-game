import '../../components/header/header.css';
import  logo from '../../assets/img/logo.svg';

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
                            <img src="https://via.placeholder.com/30" alt=""/>
                        </div>
                        <span>R$20,00</span>
                    </div>
                    <div className="goldBallValue">
                        <div className="goldBallValue_img">
                            <img src="https://via.placeholder.com/30" alt=""/>
                        </div>
                        <span>10</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header