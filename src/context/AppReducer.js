export default (state, action) => {
    switch(action.type) {
        case "SET_CASES":
            return {
                ...state,
                cases: action.payload
            }
        case "COUNTRY_LIST":
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state
    }
}