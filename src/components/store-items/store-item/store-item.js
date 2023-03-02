import './store-item.scss';
import GoldBalls from '../../../assets/img/gold-balls-store.svg';
import StoreItemBtn from '../store-item/store-item-btn/store-item-btn';

function StoreItem(){
    return(
        <div className='storeItem'>
            <img src={GoldBalls} alt="Gold Balls Icon" />
            <span>5 Bolas de Ouro</span>
            <div className='btnContainer'>
                <StoreItemBtn />
            </div>
        </div>
    )
}

export default StoreItem