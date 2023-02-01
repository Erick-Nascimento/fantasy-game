import './leagues-cards.scss'
import LeagueCard from './league-card/league-card'
import World from '../../assets/img/world-icon.svg'
import LeagueA from '../../assets/img/league-a.svg'
import LibertadoresIcon from '../../assets/img/libertadores-icon.svg'
import ChampionsLeagueIcon from '../../assets/img/champions-league-icon.svg'

function LeaguesCards (){
    return (
        <div className='leaguesCardsComponent'>
            <div className='leaguesCardsContainer'>
                <LeagueCard img={World} title="Todos os Campeonatos"/>
                <LeagueCard img={LeagueA} title="Série A"/>
                <LeagueCard img={LibertadoresIcon} title="Libertadores"/>
                <LeagueCard img={ChampionsLeagueIcon} title="Champions League"/>
            </div>
        </div>
    )
}

export default LeaguesCards