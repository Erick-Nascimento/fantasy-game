import './leagues-tabs.scss';
import { useState } from 'react';
import AllTabs from './AllTabs/allTabs';
import FreeTabs from './FreeTabs/freeTabs';
import PaidTabs from './PaidTabs/paidTabs';

function LeaguesTabs(){
    const [activeTab, setActiveTab] = useState("allTabs");

    return(
        <div className='leagues-tabs-component'>
            <div className='leagues-tabs-content'>
                <div className='tabsHeader-content'>
                    <div className='tabs'>
                        <button id='tab-one' className={activeTab === "allTabs" ? "tabHeader active" : "tabHeader"} onClick={() => setActiveTab("allTabs")}>Todas as Ligas</button>
                        <button id='tab-two' className={activeTab === "freeTabs" ? "tabHeader active" : "tabHeader"} onClick={() => setActiveTab("freeTabs")}>Ligas Gratuitas</button>
                        <button id='tab-three' className={activeTab === "paidTabs" ? "tabHeader active" : "tabHeader"} onClick={() => setActiveTab("paidTabs")}>Ligas Pagas</button>
                    </div>
                </div>
               
                <div className='tabs_lineContainer'>
                    <div className='tabs_lineContent'>
                        <hr className='tabs_line'/>
                    </div>
                </div>
                <div className='tabcontent_container'>
                    <div className='tabcontent_insideContainer'>
                        {activeTab === "allTabs" ? <AllTabs /> : null}
                        {activeTab === "freeTabs" ? <FreeTabs /> : null}
                        {activeTab === "paidTabs" ? <PaidTabs /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaguesTabs