import axios from 'axios'
import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE,
    UPDATE_CITY
} from './temperatureTypes'

export const fetchTemperatureRequest = () => {
    return {
        type: FETCH_TEMPERATURE_REQUEST
    }
}

export const fetchTemperatureSuccess = temp => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temp
    }
}

export const fetchTemperatureFailure = error => {
    return {
        type: FETCH_TEMPERATURE_FAILURE,
        payload: error
    }
}

export const fetchTemperature = () => {
    return (dispatch, getState) => {
        dispatch(fetchTemperatureRequest())
        const city = getState().temperature.city
        console.log(city)
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=21a92015c9ba0960fb4e8b02522d51ee`)
        .then(respose => {
             const temp = respose.data.main.temp
             dispatch(fetchTemperatureSuccess(temp))
         })
         .catch(error => {
             const errorMsg = error.message
             dispatch(fetchTemperatureFailure(errorMsg))
         })
    }
}

export const updateCity = city => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}


//http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}