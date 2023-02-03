import LeagueTableCard from './league-tables-cards/league-table-card';
import './leagues-tabs.scss';

function showTabs(e){
    const tabLinks = document.querySelectorAll(".tabHeader");
    const tabContent = document.querySelectorAll(".tabcontent");

    tabLinks.forEach(function(el){
        if(!el.getAttribute('id').includes(e.target.id)){
            el.classList.remove('active')
        }else{
            el.classList.add('active')
        }
    })
    
    tabContent.forEach(function(el){
        if(!el.getAttribute('id').includes(e.target.id)){
            el.classList.remove('active')
        }else{
            el.classList.add('active')
        }
    })
}

function LeaguesTabs(){
    return(
        <div className='leagues-tabs-component'>
            <div className='leagues-tabs-content'>
                <div className='tabsHeader-content'>
                    <div className='tabs'>
                        <button id='tab-one' className='tabHeader active' onClick={showTabs}>Todas as Ligas</button>
                        <button id='tab-two' className='tabHeader' onClick={showTabs}>Ligas Gratuitas</button>
                        <button id='tab-three' className='tabHeader' onClick={showTabs}>Ligas Pagas</button>
                    </div>
                </div>
               
                <div className='tabs_lineContainer'>
                    <div className='tabs_lineContent'>
                        <hr className='tabs_line'/>
                    </div>
                </div>
                <div className='tabcontent_container'>
                    <div id='tab-one-content' className='tabcontent active'>
                        <LeagueTableCard/>
                        <LeagueTableCard/>
                    </div>
                    <div id='tab-two-content' className='tabcontent'>
                        <LeagueTableCard/>
                    </div>
                    <div id='tab-three-content' className='tabcontent'>
                        <LeagueTableCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaguesTabs