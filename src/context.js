import { createContext, useState } from 'react';
import { AiOutlineConsoleSql } from 'react-icons/ai';


export const FormationsContext = createContext(0);

function FormationsProvider({children}){
    const [formation, setFormation] = useState('4-3-3')
    return(
        <FormationsContext.Provider value={{formation, setFormation}}>
            {children}
        </FormationsContext.Provider> 
    )
}

export default FormationsProvider