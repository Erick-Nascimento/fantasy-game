import './league-table-card.scss'
import CaptainIcon from '../../../assets/img/league-tables-card/captain-icon.svg'
import SubscribesIcon from '../../../assets/img/league-tables-card/subscribes-icon.svg'
import InfoIcon from '../../../assets/img/league-tables-card/info-icon.svg'
import CardImg from '../../../assets/img/league-tables-card/league-table-img.svg'
import MoneyIcon from '../../../assets/img/league-tables-card/money-icon.svg'
import GoldBallIcon from '../../../assets/img/league-tables-card/gold-ball-icon.svg'
import CouponIcon from '../../../assets/img/league-tables-card/coupon-icon.svg'
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';
import { TbCircleLetterC } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';


function LeagueTableCard(){
     return(
        <div className='leagueTableCardComponent'>
            <div className='leagueTableCardContent'>
                <div className='leagueTableCard_headerContainer'>
                    <div className='leagueTableCard_headerContent'>
                        <div className='header_captainContainer'>
                            {/*<img src={CaptainIcon} alt=""/>*/}
                            <TbCircleLetterC />
                        </div>
                        <div className='header_membersQtd'>
                            {/*<img src={SubscribesIcon} alt=""/>*/}
                            <FaUserAlt />
                            <span>9/100</span>
                        </div>
                        <div className='header_info'>
                            {/*<img src={InfoIcon} alt=""/>*/}
                            <AiFillInfoCircle />
                        </div>
                    </div>
                </div>
                <div className='leagueTableCard_img'>
                    <img src={CardImg} alt=''/>
                </div>
                <div className='leagueTableCard_content'>
                    <div className='content_title'>
                        <span>Liga dos Amigos</span>
                    </div>
                    <div className='leagueTableCard_award'>
                        <span>Premiação</span>
                        <div className='awardsContainer'>
                            <div className='moneyAward'>
                                <div className=''>
                                    {/*<img src={MoneyIcon} alt=''/>*/}
                                    <FaMoneyBillAlt />
                                </div>
                                <div className=''>
                                    <span>R$50,00</span>
                                </div>
                            </div>
                            <div className='goldBallsAward'>
                                <div className=''>
                                    <img src={GoldBallIcon} alt=''/>
                                </div>
                                <div className=''>
                                    <span>R$50,00</span>
                                </div>
                            </div>
                            <div className='couponAward'>
                                <div className=''>
                                    <img src={CouponIcon} alt=''/>
                                </div>
                                <div className=''>
                                    <span>R$50,00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='leagueTableCard_hrContent'>
                        <hr className='leagueTableCard_hr'/>
                    </div>
                    <div className='leagueTableCard_market'>
                        <span className='market_label'>Mercado fecha em:</span>
                        <span className='market_time'>1d 05h 35m 15s</span>
                    </div>
                </div>
            </div>
            <Link to="create-league">
                <div className='leagueTableCard_btnContainer'>
                    <div className='leagueTableCard_btnContent'>
                        <span className='tableBtn_price'>Grátis</span>
                        <img src={GoldBallIcon} alt='' className='tableBtn_priceImg'/>
                        <span>Entrar</span>
                    </div>
                </div>
            </Link>
        </div>
     )
}

export default LeagueTableCard