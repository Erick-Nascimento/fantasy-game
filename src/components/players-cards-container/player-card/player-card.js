import './player-card.scss';
import TransactionBtn from './transaction-btn/transaction-btn';
import CalendarIcon from '../../../assets/img/calendar-icon.svg';
import ClockIcon from '../../../assets/img/clock-icon.svg';
import ConfirmedIcon from '../../../assets/img/player-card-status/confirmed-icon.svg';

function PlayerCard(){
    return(
        <div className='playerCard'>
            <div className='playerCard__top'>
                <div className='playerIconContainer'>
                    <div className='playerIcon'>
                        <span>FLA</span>
                    </div>
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
        </div>
    )
}

export default PlayerCard