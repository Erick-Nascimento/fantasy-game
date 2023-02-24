import './footerBtn.scss';

function footerBtn(props){
    return(
        <div className='footerBtn_container'>
            <a href={props.link}>
                <div className='footerBtn_content'>
                    <img src={props.img} alt={props.alt}/>
                    <span>{props.text}</span>
                </div>
            </a>
        </div>
    )
}

export default footerBtn