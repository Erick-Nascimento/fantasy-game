import './escalation-controls.scss';
import BoardControllers from "../board-controllers/board-controllers";
import FieldBoard from "../field-board/field-board";
import BenchCard from "../bench-card/bench-card";
import PlayerSellModal from "../player-sell-modal/player-sell-modal"

function EscalationControls(){
    return(
        <div className='EscalationControls'>
            <BoardControllers />
            <FieldBoard />
            <BenchCard />
            <PlayerSellModal />
        </div>
    )
}

export default EscalationControls