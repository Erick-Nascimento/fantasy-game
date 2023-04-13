import './player-icon.scss';

function PlayerIcon({team}){
    return(
        <div className={`playerIcon ${team}`}>
            <span></span>
        </div>
    )
}

export default PlayerIcon