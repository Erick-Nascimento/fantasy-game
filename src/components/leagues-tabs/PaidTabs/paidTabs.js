import LeagueTableCard from "../league-tables-cards/league-table-card";

function PaidTabs(){
    return(
        <div id='tab-three-content' className='tabcontent active'>
            <LeagueTableCard/>
            <LeagueTableCard/>
            <LeagueTableCard/>
        </div>
    )
}

export default PaidTabs