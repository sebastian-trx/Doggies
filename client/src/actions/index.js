import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    // let dogs = await axios.get("http://localhost:3001/dogs/");
    let dogs = await axios.get("/dogs/");

    return dispatch({
      type: "GET_DOGS",
      payload: dogs.data,
    });
  };
}

export function filterByBreed(payload) {
  return {
    type: "FILTER_BY_BREED",
    payload,
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let temperaments = await axios.get("/temperament/");

    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: temperaments.data,
    });
  };
}

export function filterByTemperament(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENT",
    payload,
  };
}

export function filterAsc_Desc(payload) {
  return {
    type: "FILTER_ASC_DESC",
    payload,
  };
}

export function filterMax_Min(payload) {
  return {
    type: "FILTER_MAX_MIN",
    payload,
  };
}

export function breedByUser(payload) {
  return {
    type: "BREED_BY_USER",
    payload,
  };
}

export function searchBar(payload) {
  return async function (dispatch) {
    let razaDogs = await axios.get(
      `/dogs?raza=${payload}`
    );
    return dispatch({
      type: "SEARCH_BAR",
      payload: razaDogs.data,
    });
  };
}

export function createBreed(payload) {
  return async function (dispatch) {
    let createBreed = await axios.post("/dogs/", payload);

    return createBreed;
  };
}

export function detail(payload){
    return async function (dispatch){
        let detail = await axios.get(`/dogs/${payload}`)
        return dispatch({
            type: 'GET_DETAIL',
            payload: detail.data
        })
    }
}