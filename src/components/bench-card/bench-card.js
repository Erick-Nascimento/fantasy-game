import './bench-card.scss';
import PlayerBtn from '../player-btn/player-btn';

function BenchCard(){
    return(
        <div className='benchContainer'>
            <div className='benchContainer__title'>
                <span>Banco de Reservas</span>
            </div>
            <div className='benchContainer__players'>
                <PlayerBtn linkTo="buy-players" position="goalkeeper"/>
                <PlayerBtn linkTo="buy-players" position="defender"/>
                <PlayerBtn linkTo="buy-players" position="full-back"/>
                <PlayerBtn linkTo="buy-players" position="midfielder"/>
                <PlayerBtn linkTo="buy-players" position="atacker"/>
            </div>
            
        </div>
    )
}

export default BenchCard