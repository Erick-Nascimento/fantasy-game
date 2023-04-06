import { createContext, useState } from 'react';


export const FormationsContext = createContext(0);

function FormationsProvider({children}){
    const [formation, setFormation] = useState("4-3-3")
    return(
        <FormationsContext.Provider value={{formation, setFormation}}>
            {children}
        </FormationsContext.Provider> 
    )
}

export default FormationsProvider