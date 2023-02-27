import LeagueTableCard from "../league-tables-cards/league-table-card";

function FreeTabs(){
    return(
        <div id='tab-two-content' className='tabcontent active'>
            <LeagueTableCard/>
            <LeagueTableCard/>
        </div>
    )
}

export default FreeTabs