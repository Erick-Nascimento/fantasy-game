import './player-sell-modal.scss';
import CloseIcon from '../../assets/img/close-icon.svg';
import PlayerIcon from '../player-icon/player-icon';
import PointIcon from '../../assets/img/point-icon.svg';
import InfosContainer from '../players-cards-container/player-card/infos-container/infos-container';
import ReplacementBtn from './replacement-button/replacement-button';
import CaptainBtn from './captain-btn/captain-btn';
import SellBtn from './sell-btn/sell-btn';
import IconButton from '../icon-button/icon-button';
import CaptainBand from '../../assets/img/captain-band.svg';
import ReplacementIcon from '../../assets/img/replacement-icon.svg';
import SellTag from '../../assets/img/sell-tag.svg';
import { useState } from 'react';

function PlayerSellModal(){    
    return(
        <div className='playerSellModal'>
            <img src={CloseIcon} alt="Close Icon" className='closeIcon'/>
            <div className='playerIconContainer'>
                <PlayerIcon />
            </div>
            <div className='playerInfos'>
                <span>Everton Ribeiro</span>
                <div className='playerNameContainer'>
                    <span>ATA</span>
                    <img src={PointIcon} alt="Point Icon" />
                    <span>Flamengo</span>
                </div>
                <div className='modalInfosContainer'>
                    <InfosContainer />
                </div>
                <div className='modalPlayerPrice'>
                    <span>Preço <em>R$15.000</em></span>
                </div>
                <div className='matchInfos'>
                    <span><em>São Paulo</em> x Flamengo</span>
                </div>
                <div className='modalButtons'>
                    {/*<ReplacementBtn />
                    <CaptainBtn />
                    <SellBtn />*/}
                    <IconButton
                        text="Substituir"
                        icon={ReplacementIcon}
                        bg="white"
                        txtColor="txtBlack"
                        size="medium"
                    />
                    <IconButton
                        text="Tornar Capitão"
                        icon={CaptainBand}
                        bg="yellow"
                        size="medium"
                    />
                    <IconButton
                        text="Vender Jogador"
                        icon={SellTag}
                        bg="red"
                        size="big"
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayerSellModal