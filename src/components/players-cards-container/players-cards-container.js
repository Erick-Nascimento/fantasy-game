import { useEffect, useState } from 'react';
import PlayerCard from './player-card/player-card';
import './players-cards-container.scss';
import { useParams } from 'react-router-dom';

function PlayerCardsContainer(){

    const {position} = useParams()
    console.log(position)
    const [players, setPlayers] = useState(null)

    async function getData() {
        //setFormations(null)
        const response = await fetch(`http://localhost:4000/players?${position}`);
        const jsonData = await response.json();
        setPlayers(jsonData);
        console.log(jsonData)
    }

    useEffect(() => {
        getData()
    }, []);

    if(players == null){
        <p>Carregando</p>
    } else{
        return(
            <div className='playerCardsContainer'>
                {players[position].map(player => <PlayerCard key={player.id} {...player}/>)}
            </div>
        )
    }
}

export default PlayerCardsContainer