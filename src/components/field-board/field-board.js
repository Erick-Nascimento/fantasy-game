import './field-board.scss';
import PlayerBtn from '../player-btn/player-btn';
import Field from '../../assets/img/field.svg'


function FieldBoard(){
    return(
        <section className='fieldContainer'>
            <div className='FieldImgContainer'>
                <img className='fieldImg' src={Field} alt='Field Board' />
            </div>
            
            <div className='PlayersContainer'>
                <PlayerBtn />
            </div>
            
        </section>
         
    )
}

export default FieldBoard