import './closable-header.scss';
import LeftArrow from '../../assets/img/left-arrow.svg'
import {Link, useParams} from 'react-router-dom';

function ClosableHeader(props){
    const {position} = useParams()
    
    const translatedPositions = {"atacker": "Atacantes", "midfielder": "Meias", "full-back": "Laterais", "goalkeeper": "Goleiros", "defender": "Zagueiros"}

    return(
        <header className='closableHeader'>
            <Link to={props.linkTo}>
                <img src={LeftArrow} alt='Left Arrow Icon' />
            </Link>
            <span>{props.span ? props.span : translatedPositions[position]}</span>
        </header>
    )
}

export default ClosableHeader