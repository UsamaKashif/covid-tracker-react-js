import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"


const initialState = {
    cases: {},
    countryData: {},
    dailySummary: []
}


export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const setCases = (d_obj) => {
        dispatch({
            type: "SET_CASES",
            payload: d_obj
          })
    }


    const countryList = (obj) => {
        dispatch({
            type: "COUNTRY_LIST",
            payload: obj
        })
    }

    return (
        <GlobalContext.Provider value={{
            cases: state.cases,
            setCases,
            countryList,
            all_countries: state.countries
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
