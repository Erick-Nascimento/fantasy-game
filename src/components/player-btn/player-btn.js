import './player-btn.scss';
import PlusIcon from '../../assets/img/plus.svg'
import {Link} from 'react-router-dom';

function PlayerBtn(props){
    return(
        <div className='playerBtnContainer'>
            <Link to={props.linkTo}>
                <button className='PlayerBtn'>
                    <img src={PlusIcon} alt="Plus Icon" />
                </button>
            </Link>
            <div className='PlayerBtn_label'>
                <span>ATA</span>
            </div>
        </div>
    )
}

export default PlayerBtn