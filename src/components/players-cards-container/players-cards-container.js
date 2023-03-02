import PlayerCard from './player-card/player-card';
import './players-cards-container.scss';

function PlayerCardsContainer(){
    return(
        <div className='playerCardsContainer'>
            <PlayerCard />
            <PlayerCard />
        </div>
    )
}

export default PlayerCardsContainer