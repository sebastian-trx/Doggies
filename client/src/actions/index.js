import axios from 'axios'

export function getDogs() {
    return async function (dispatch){
        let dogs = await axios.get('http://localhost:3001/dogs/')
    
        return dispatch({
            type: 'GET_DOGS',
            payload: dogs.data
        })
    }
}

export function filterByBreed(payload){
    return{
        type: 'FILTER_BY_BREED',
        payload
    }
}

export function getTemperaments(){
    return async function(dispatch){
        let temperaments = await axios.get('http://localhost:3001/temperament/')

        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: temperaments.data
        })
    }
}

export function filterByTemperament(payload){
    return{
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}