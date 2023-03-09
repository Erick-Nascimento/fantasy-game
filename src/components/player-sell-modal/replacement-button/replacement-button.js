import './replacement-button.scss';
import ReplacementIcon from '../../../assets/img/replacement-icon.svg';

function ReplacementBtn(){
    return(
        <button className='replacementBtn'>
            <img src={ReplacementIcon} alt="Replacement Icon" />
            Substituir
        </button>
    )
}

export default ReplacementBtn