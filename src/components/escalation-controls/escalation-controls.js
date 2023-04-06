import './escalation-controls.scss';
import BoardControllers from "../board-controllers/board-controllers";
import FieldBoard from "../field-board/field-board";
import BenchCard from "../bench-card/bench-card";
import PlayerSellModal from "../player-sell-modal/player-sell-modal"
import { useState } from 'react';
import FormationsProvider from '../../context';


function EscalationControls(){
    const [isOpen, setIsOpen] = useState(false)
   
    return(
        <div className='EscalationControls'>
            <FormationsProvider>
                <BoardControllers />
                <FieldBoard/>
            </FormationsProvider>
            <BenchCard />
            {isOpen ? <PlayerSellModal /> : null}
        </div>
    )
}

export default EscalationControls