import ClosableHeader from "../components/closable-header/closable-header";
import InfosContainer from "../components/infos-container/infos-container";
import BottomNav from "../components/bottom-nav/bottom-nav";
import EscalationControls from "../components/escalation-controls/escalation-controls"

function CreateLeague(){
    return(
        <>
        <ClosableHeader 
            linkTo="/"
            span="Escalação 01"
        />
        <InfosContainer />
        <EscalationControls />
        <BottomNav />
        </>
    )
}

export default CreateLeague