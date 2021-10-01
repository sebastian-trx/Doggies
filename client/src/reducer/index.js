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
            let allDogs = state.dogs1
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
            let allDogs1 = state.dogs1
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
        case 'FILTER_ASC_DESC':
            let allDogs2 = state.dogs
            let filterAsc_Desc = action.payload === 'asc' ?
                
            allDogs2.sort((a,b)=> {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1
                }
                return 0
              }):
              allDogs2.sort((a,b)=> {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return -1
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return 1
                }
                return 0
              })

            return{
                ...state,
                dogs: filterAsc_Desc
            }
        case 'FILTER_MAX_MIN':
            let allDogs3 = state.dogs
            let noNaN = allDogs3.filter(e=> !e.weight.includes("NaN"))    
            let filterMax_Min = action.payload === 'menos' ?
            noNaN.sort((a,b)=> {
                if (parseInt(a.weight)  > parseInt(b.weight)) {
                    return 1
                }
                if (parseInt(a.weight) < parseInt(b.weight)) {
                    return -1
                }
                return 0
                }):
            noNaN.sort((a,b)=> {
                if (parseInt(a.weight)  > parseInt(b.weight)) {
                    return -1
                }
                if (parseInt(a.weight) < parseInt(b.weight)) {
                    return 1
                }
                return 0
                })
            return{
                ...state,
                dogs: filterMax_Min
            }
        case 'BREED_BY_USER':
            let allDogs4 = state.dogs1
            let filterByUser = action.payload === 'user' ? 
            allDogs4.filter(el => {
                if (el.temperaments && typeof el.temperaments !== 'string') {
                  return  true
                }
              })
            :
            allDogs4.filter(el => {
                if (el.temperaments && typeof el.temperaments === 'string') {
                  return  true
                }
              })
            return{
                ...state,
                dogs: filterByUser
            }    
        default:
            return state
    }
}

export default rootReducer