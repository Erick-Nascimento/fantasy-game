import './infos-container.scss';
import ConfirmedIcon from '../../../../assets/img/player-card-status/confirmed-icon.svg';

function InfosContainer(){
    return(
        <div className='playerInfosContainer'>
            <div className='last'>
                <p>Ultima</p>
                <span>1.57</span>
            </div>
            <hr />
            <div className='average'>
                <p>Média</p>
                <span>1.57</span>
            </div>
            <hr />
            <div className='status'>
                <p>Status</p>
                <img src={ConfirmedIcon} alt='Confirmed Icon' />
            </div>
            <hr />
            <div className='matches'>
                <p>Partidas</p>
                <span>3</span>
            </div>
        </div>
    )
}

export default InfosContainer