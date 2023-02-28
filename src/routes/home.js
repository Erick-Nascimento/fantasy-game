import Header from '../components/header/header'
import LeaguesCards from '../components/leagues-cards/leagues-cards';
import LeaguesTabs from '../components/leagues-tabs/leagues-tabs';
import BottomNav from '../components/bottom-nav/bottom-nav';

function Home(){
    return(
        <>
            <Header />
            <div className='body_content'>
                <LeaguesCards />
                <LeaguesTabs/>
            </div>
            <BottomNav />
        </>
    )
}

export default Home