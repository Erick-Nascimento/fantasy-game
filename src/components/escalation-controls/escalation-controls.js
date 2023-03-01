import './escalation-controls.scss';
import BoardControllers from "../board-controllers/board-controllers";
import FieldBoard from "../field-board/field-board";
import BenchCard from "../bench-card/bench-card";

function EscalationControls(){
    return(
        <div className='EscalationControls'>
           
        <BoardControllers />
        <FieldBoard />
        <BenchCard />
            
        </div>
    )
}

export default EscalationControls