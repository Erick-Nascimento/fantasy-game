import './bench-card.scss';
import PlayerBtn from '../player-btn/player-btn';

function BenchCard(){
    return(
        <div className='benchContainer'>
            <div className='benchContainer__title'>
                <span>Banco de Reservas</span>
            </div>
            <div className='benchContainer__players'>
                {/*To do - Render a single component using props*/}
                <PlayerBtn linkTo={`buy-players/goalkeeper`} position="goalkeeper"/>
                <PlayerBtn linkTo={`buy-players/defender`} position="defender"/>
                <PlayerBtn linkTo={`buy-players/full-back`} position="full-back"/>
                <PlayerBtn linkTo={`buy-players/midfielder`} position="midfielder"/>
                <PlayerBtn linkTo={`buy-players/atacker`} position="atacker"/>
            </div>
            
        </div>
    )
}

export default BenchCard