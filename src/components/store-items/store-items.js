import StoreItem from './store-item/store-item';
import './store-items.scss';

function StoreItems(){
    return(
        <div className='storeItemsContainer'>
            <StoreItem />
            <StoreItem />
            <StoreItem />
        </div>
    )
}

export default StoreItems