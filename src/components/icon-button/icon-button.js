import './icon-button.scss';

function IconButton(props){
    return(
        <button className={`IconButton ${props.bg} ${props.txtColor} ${props.size}`}>
            <img src={props.icon} alt="Button" />
            {props.text}
        </button>
    )
}

export default IconButton