import './player-card.scss';
import TransactionBtn from './transaction-btn/transaction-btn';
import CalendarIcon from '../../../assets/img/calendar-icon.svg';
import ClockIcon from '../../../assets/img/clock-icon.svg';
import PlayerIcon from '../../player-icon/player-icon';
import InfosContainer from './infos-container/infos-container';

function PlayerCard(){
    return(
        <div className='playerCard'>
            <div className='playerCard__top'>
                <div className='playerIconContainer'>
                    <PlayerIcon />
                </div>
                <div className='playerInfos'>
                    <span className='playerName'>Carlos</span>
                    <span className='teamNames'><em>Corinthians</em> x São Paulo</span>
                    <div className='matchInfos'>
                        <div className='date'>
                            <img src={CalendarIcon} alt='Calendar Icon' />
                            <span>15/04</span>
                        </div>
                        <div className='hour'>
                            <img src={ClockIcon} alt='Clock Icon' />
                            <span>16:00</span>
                        </div>
                    </div>
                </div>
                <TransactionBtn />
            </div>
            <div className='playerCard__bottom'>
                <div className='price'>
                    <p>Preço</p>
                    <span>R$ 12.000</span>
                </div>
                <div className='infosContainerComponent'>
                    <InfosContainer />
                </div>
            </div>
        </div>
    )
}

export default PlayerCard