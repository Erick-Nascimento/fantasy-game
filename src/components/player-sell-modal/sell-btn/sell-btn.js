import './sell-btn.scss';
import SellTag from '../../../assets/img/sell-tag.svg';

function SellBtn(){
    return(
        <button className='sellBtn'>
            <img src={SellTag} alt="Sell Tag" />
            Vender Jogador
        </button>
    )
}

export default SellBtn