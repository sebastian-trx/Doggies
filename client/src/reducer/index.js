const initialState = {
    dogs : [],
    dogs1 : [],
    temperaments: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                dogs1: action.payload
            }
        case 'FILTER_BY_BREED':
            let allDogs = state.dogs
            let filteredByBreed = allDogs.filter(el => el.name === action.payload)
            return{
                ...state,
                dogs: filteredByBreed
            }
        case 'GET_TEMPERAMENTS':
            return{
                ...state,
                temperaments: action.payload,
            }
        case 'FILTER_BY_TEMPERAMENT':
            let allDogs1 = state.dogs
            let filterByTemperament, filter1, filter2
            filter1 = allDogs1.filter(el => {
                if (el.temperaments && typeof el.temperaments === 'string') {
                  return  el.temperaments.split(', ').includes(action.payload)
                }
              })
              filter2 = allDogs1.filter(el => {
                if (el.temperaments && Array.isArray(el.temperaments)) {
                  return el.temperaments.map(el => el.name).includes(action.payload)
                }
              })
              filterByTemperament = filter1.concat(filter2)     
            return{
                ...state,
                dogs: filterByTemperament,
            }
        default:
            return state
    }
}

export default rootReducer