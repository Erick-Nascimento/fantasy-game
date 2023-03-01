import './confirm-btn.scss';
import ConfirmIcon from '../../../assets/img/check-icon.svg';

function ConfirmBtn(){
    return(
        <button className='confirmBtn'>
            <img src={ConfirmIcon} alt="Confirm Icon" />
            Confirmar
        </button>
    )
}

export default ConfirmBtn