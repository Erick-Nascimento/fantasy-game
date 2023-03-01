import './closable-header.scss';
import LeftArrow from '../../assets/img/left-arrow.svg'
import {Link} from 'react-router-dom';

function ClosableHeader(props){
    return(
        <header className='closableHeader'>
            <Link to={props.linkTo}>
                <img src={LeftArrow} alt='Left Arrow Icon' />
            </Link>
            <span>{props.span}</span>
        </header>
    )
}

export default ClosableHeader