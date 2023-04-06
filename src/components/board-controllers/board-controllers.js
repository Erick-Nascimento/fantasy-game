import './board-controllers.scss';
import FormationSelect from './formation-select/formation-select';
import ClearBtn from './clear-btn/clear-btn';
import ConfirmBtn from './confirm-btn/confirm-btn';
import IconButton from '../icon-button/icon-button';
import TrashIcon from '../../assets/img/trash-icon.svg';
import ConfirmIcon from '../../assets/img/check-icon.svg';
import { useContext } from 'react';
import {FormationsContext} from '../../context';

function BoardControllers(){
    const {formation} = useContext(FormationsContext)
    console.log(formation)
    return(
        <section className='BoardControllers'>
            <FormationSelect />
            {/*<ClearBtn />
            <ConfirmBtn />*/}
            <IconButton 
                text="Limpar"
                bg="red"
                size="small"
                icon={TrashIcon}
            />
            <IconButton 
                text="Confirmar"
                bg="green"
                size="small"
                icon={ConfirmIcon}
            />
        </section>
    )
}

export default BoardControllers