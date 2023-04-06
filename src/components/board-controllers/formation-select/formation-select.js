import { useContext } from 'react';
import './formation-select.scss';
import {FormationsContext} from '../../../context';

function FormationSelect(){
    const {setFormation} = useContext(FormationsContext)
    const formation = function selectFormation(e){
        //console.log(e.target.value)
        setFormation(e.target.value)
    }
    return (
        <select onChange={formation} defaultValue={'4-3-3'}>
            <option value="4-3-3">4-3-3</option>
            <option value="3-4-3">3-4-3</option>
            <option value="4-5-1">4-5-1</option>
            <option value="4-4-2">4-4-2</option>
            <option value="3-5-2">3-5-2</option>
            <option value="5-4-1">5-4-1</option>
        </select>
    )
}

export default FormationSelect