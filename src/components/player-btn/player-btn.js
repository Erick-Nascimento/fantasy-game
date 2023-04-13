import './player-btn.scss';
import PlusIcon from '../../assets/img/plus.svg'
import {Link} from 'react-router-dom';

function PlayerBtn(props){

    function teste(e){
        console.log(e.target)
    }
    return(
        <div className={`playerBtnContainer ${props.position}`} onClick={teste}>
            <Link to={props.linkTo}>
                <button className='PlayerBtn'>
                    <img src={PlusIcon} alt="Plus Icon" />
                </button>
            </Link>
            <div className='PlayerBtn_label'>
                <span></span>
            </div>
        </div>
    )
}

export default PlayerBtn