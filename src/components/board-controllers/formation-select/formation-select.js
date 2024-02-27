import { useContext } from 'react';
import './formation-select.scss';
import {FormationsContext} from '../../../context';

function FormationSelect(){
    const {formation, setFormation} = useContext(FormationsContext)
    const changeFormation = function selectFormation(e){
        //console.log(e.target.value)
        setFormation(e.target.value)
    }
    return (
        <select onChange={changeFormation} defaultValue={formation}>
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