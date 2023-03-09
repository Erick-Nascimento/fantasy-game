import './captain-btn.scss';
import CaptainBand from '../../../assets/img/captain-band.svg';

function CaptainBtn(){
    return(
        <button className='captainBtn'>
            <img src={CaptainBand} alt="Captain Band" />
            Tornar Capitão
        </button>
    )
}

export default CaptainBtn