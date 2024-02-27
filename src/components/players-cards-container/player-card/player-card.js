import './player-card.scss';
import TransactionBtn from './transaction-btn/transaction-btn';
import CalendarIcon from '../../../assets/img/calendar-icon.svg';
import ClockIcon from '../../../assets/img/clock-icon.svg';
import PlayerIcon from '../../player-icon/player-icon';
import InfosContainer from './infos-container/infos-container';

function PlayerCard({id, name, team, opponent, date, hour, price}){
    return(
        <div className='playerCard'>
            <div className='playerCard__top'>
                <div className='playerIconContainer'>
                    <PlayerIcon team={team}/>
                </div>
                <div className='playerInfos'>
                    <span className='playerName'>{name}</span>
                    <span className='teamNames'><em>{team}</em> x Santos{/*opponent*/}</span>
                    <div className='matchInfos'>
                        <div className='date'>
                            <img src={CalendarIcon} alt='Calendar Icon' />
                            <span>{date}</span>
                        </div>
                        <div className='hour'>
                            <img src={ClockIcon} alt='Clock Icon' />
                            <span>{hour}</span>
                        </div>
                    </div>
                </div>
                <TransactionBtn playerId={id}/>
            </div>
            <div className='playerCard__bottom'>
                <div className='price'>
                    <p>Preço</p>
                    <span>R$ {price}</span>
                </div>
                <div className='infosContainerComponent'>
                    <InfosContainer />
                </div>
            </div>
        </div>
    )
}

export default PlayerCard