import ClosableHeader from "../components/closable-header/closable-header"
import InfosContainer from "../components/infos-container/infos-container"
import PlayerCardsContainer from "../components/players-cards-container/players-cards-container"
import SearchContainer from "../components/search-container/search-container"

function BuyPlayers(){
    return(
        <>
        <ClosableHeader 
            linkTo="/create-league"
        />
        <InfosContainer />
        <SearchContainer />
        <PlayerCardsContainer />
        </>
    )
}

export default BuyPlayers