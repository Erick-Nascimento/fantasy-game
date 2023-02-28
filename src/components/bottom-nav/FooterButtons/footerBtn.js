import './footerBtn.scss';
import {Link} from 'react-router-dom';

function footerBtn(props){
    return(
        <div className='footerBtn_container'>
            <Link to={props.link}>
                <div className='footerBtn_content'>
                    <img src={props.img} alt={props.alt}/>
                    <span>{props.text}</span>
                </div>
            </Link>
        </div>
    )
}

export default footerBtn