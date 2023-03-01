import './board-controllers.scss';
import FormationSelect from './formation-select/formation-select';
import ClearBtn from './clear-btn/clear-btn';
import ConfirmBtn from './confirm-btn/confirm-btn';

function BoardControllers(){
    return(
        <section className='BoardControllers'>
            <FormationSelect />
            <ClearBtn />
            <ConfirmBtn />
        </section>
    )
}

export default BoardControllers