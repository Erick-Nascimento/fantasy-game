import './clear-btn.scss';
import TrashIcon from '../../../assets/img/trash-icon.svg';

function ClearBtn(){
    return(
        <button className='clearBtn'>
            <img src={TrashIcon} alt="Trash Icon" />
            Limpar
        </button>
    )
}

export default ClearBtn