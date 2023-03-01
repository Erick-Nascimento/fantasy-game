import './bench-card.scss';
import PlayerBtn from '../player-btn/player-btn';

function BenchCard(){
    return(
        <div className='benchContainer'>
            <div className='benchContainer__title'>
                <span>Banco de Reservas</span>
            </div>
            <div className='benchContainer__players'>
                <PlayerBtn />
                <PlayerBtn />
                <PlayerBtn />
                <PlayerBtn />
                <PlayerBtn />
            </div>
            
        </div>
    )
}

export default BenchCard