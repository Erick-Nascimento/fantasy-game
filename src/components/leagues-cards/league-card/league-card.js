import './league-card.scss'

function LeagueCard(props){
    return(
        <div className="leagueCardComponent">
            <div className="leagueCardContainer">
                <img src={props.img} alt="Brasileirão"/>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

LeagueCard.defaultProps = {
    img: 'https://via.placeholder.com/50',
    title: 'Sem nome'
}

export default LeagueCard