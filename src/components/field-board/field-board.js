import './field-board.scss';
import PlayerBtn from '../player-btn/player-btn';
import Field from '../../assets/img/field.svg';
import { useContext, useEffect, useState } from 'react';
import {FormationsContext} from '../../context';
import BuyPlayers from '../../routes/buy-players';

function FieldBoard(props){
    const {formation} = useContext(FormationsContext)
    const [formations, setFormations] = useState(null)

    async function getData() {
        //setFormations(null)
        const response = await fetch(`http://localhost:4000/formations?id=${formation}`);
        const jsonData = await response.json();
        setFormations(jsonData);
    }

    useEffect(() => {
        getData()
    }, [formation]);

    if(formations == null){
        <p>Carregando</p>
    } else{
        return(
            <section className='fieldContainer'>
                <div className='FieldImgContainer'>
                    <img className='fieldImg' src={Field} alt='Field Board' />
                </div>


                <div className={`PlayersContainer f${formation}`}>
                    {formations[0].positions.map(position => <PlayerBtn linkTo={`buy-players/${position.name}`} position={position.name} key={position.id} />)}
                </div>
                
            </section>
        )
    }
}

export default FieldBoard