import './bench-card.scss';
import PlayerBtn from '../player-btn/player-btn';

function BenchCard(){
    return(
        <div className='benchContainer'>
            <div className='benchContainer__title'>
                <span>Banco de Reservas</span>
            </div>
            <div className='benchContainer__players'>
                <PlayerBtn linkTo="buy-players"/>
                <PlayerBtn linkTo="buy-players"/>
                <PlayerBtn linkTo="buy-players"/>
                <PlayerBtn linkTo="buy-players"/>
                <PlayerBtn linkTo="buy-players"/>
            </div>
            
        </div>
    )
}

export default BenchCard