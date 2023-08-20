import { ACCESS_TOKEN, axiosInstances, serviceProps } from '../config/appEnvConfig';

export const clearResponse = (actionType) => {
    let respOutput = {
        isServiceCalled: false,
        isSuccessResp: false,
        respMessage: null,
        errorCode: null,
        errorMessage: null,
    }
    return {
        type: actionType,
        payload: respOutput
    };
}

export const getUpcomingMovie = (page, actionType) => {
    let inputHeader = null;
    let serviceURLInstance = axiosInstances.tmdbBaseService;
    let respOutputGetUpcomingMovie = {
        isServiceCalled: false,
        isSuccessResp: false,
        respMessage: null,
        errorCode: null,
        errorMessage: null,
    };
    console.log("In Action GetUpcomingMovie", page);
    const serviceURI = `${serviceProps.getUpcomingMovie.uri}??sort_by=release_date.desc&page=${page}`;

    return async (dispatch) => {
        try {
            inputHeader = {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
            await serviceURLInstance
                .get(serviceURI, {
                    headers: inputHeader,
                    timeout: 30000,
                }).then((success) => {
                    respOutputGetUpcomingMovie.isServiceCalled = true;
                    respOutputGetUpcomingMovie.isSuccessResp = true;
                    respOutputGetUpcomingMovie.respMessage = success.data.results;
                    //console.log("success", respOutputGetUpcomingMovie);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetUpcomingMovie,
                    });
                })
                .catch((serviceError) => {
                    respOutputGetUpcomingMovie.isServiceCalled = true;
                    respOutputGetUpcomingMovie.isSuccessResp = false;
                    respOutputGetUpcomingMovie.errorMessage = serviceError;
                    console("Error In GETUpcomingMovie", serviceError);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetUpcomingMovie,
                    });
                });
        }
        catch {
            respOutputGetUpcomingMovie.isServiceCalled = false;
            respOutputGetUpcomingMovie.isSuccessResp = false;
            console.log("Error in GetUpcomingMovie : No response from service");
            dispatch({
                type: actionType,
                payload: respOutputGetUpcomingMovie,
            });
        }
    };
}

export const getSearchedMovie = ( searchString,page,actionType) => {
    let inputHeader = null;
    let serviceURLInstance = axiosInstances.tmdbBaseService;
    let respOutputGetSearchedMovie = {
        isServiceCalled : false,
        isSuccessResp : false,
        respMessage: null,
        errorCode : null,
        errorMessage: null,
    };

    const serviceURI = `${serviceProps.getSearchedMovie.uri}?query=${searchString}&sort_by=release_date.desc&page=${page}`;

    return async (dispatch) => {
        try {
            inputHeader = {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
            await serviceURLInstance
                .get(serviceURI,{
                    headers: inputHeader,
                    timeout: 10000,
                }).then((success) =>{
                    respOutputGetSearchedMovie.isServiceCalled = true;
                    respOutputGetSearchedMovie.isSuccessResp = true;
                    respOutputGetSearchedMovie.respMessage = success.data.results;
                    //console.log("success", respOutputGetSearchedMovie);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetSearchedMovie,
                    });
                })
                .catch((serviceError) =>{
                    respOutputGetSearchedMovie.isServiceCalled = true;
                    respOutputGetSearchedMovie.isSuccessResp = false;
                    respOutputGetSearchedMovie.errorMessage = serviceError;
                    console("Error In GetSearchedMovie", serviceError);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetSearchedMovie,
                    });
                });
        }
        catch {
            respOutputGetSearchedMovie.isServiceCalled = false;
            respOutputGetSearchedMovie.isSuccessResp = false;
            console.log("Error in GetSearchedMovie : No response from service");
            dispatch({
                type: actionType,
                payload: respOutputGetSearchedMovie,
            });
        }
    };
};

export const getMoiveDetails = (id,actionType) => {
    let inputHeader = null;
    let serviceURLInstance = axiosInstances.tmdbBaseService;
    let respOutputGetMoiveDetails = {
        isServiceCalled : false,
        isSuccessResp : false,
        respMessage: null,
        errorCode : null,
        errorMessage: null,
    };
    const serviceURI = `${serviceProps.getMoiveDetails.uri}${id}`;

    return async (dispatch) => {
        try {
            inputHeader = {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
            await serviceURLInstance
                .get(serviceURI,{
                    headers: inputHeader,
                    timeout: 10000,
                }).then((success) =>{
                    respOutputGetMoiveDetails.isServiceCalled = true;
                    respOutputGetMoiveDetails.isSuccessResp = true;
                    respOutputGetMoiveDetails.respMessage = success.data;
                    //console.log("success", respOutputGetMoiveDetails);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetMoiveDetails,
                    });
                })
                .catch((serviceError) =>{
                    respOutputGetMoiveDetails.isServiceCalled = true;
                    respOutputGetMoiveDetails.isSuccessResp = false;
                    respOutputGetMoiveDetails.errorMessage = serviceError;
                    console("Error In GetMovieDetails", serviceError);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetMoiveDetails,
                    });
                });
        }
        catch {
            respOutputGetMoiveDetails.isServiceCalled = false;
            respOutputGetMoiveDetails.isSuccessResp = false;
            console.log("Error in GetMovieDetails : No response from service");
            dispatch({
                type: actionType,
                payload: respOutputGetMoiveDetails,
            });
        }
    };
};

export const getMoiveCastDetails = (id,actionType) => {
    let inputHeader = null;
    let serviceURLInstance = axiosInstances.tmdbBaseService;
    let respOutputGetMoiveCastDetails = {
        isServiceCalled : false,
        isSuccessResp : false,
        respMessage: null,
        errorCode : null,
        errorMessage: null,
    };
    const serviceURI = `${serviceProps.getMoiveDetails.uri}${id}/credits`;

    return async (dispatch) => {
        try {
            inputHeader = {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
            await serviceURLInstance
                .get(serviceURI,{
                    headers: inputHeader,
                    timeout: 10000,
                }).then((success) =>{
                    respOutputGetMoiveCastDetails.isServiceCalled = true;
                    respOutputGetMoiveCastDetails.isSuccessResp = true;
                    respOutputGetMoiveCastDetails.respMessage = success.data;
                    //console.log("success", respOutputGetMoiveCastDetails);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetMoiveCastDetails,
                    });
                })
                .catch((serviceError) =>{
                    respOutputGetMoiveCastDetails.isServiceCalled = true;
                    respOutputGetMoiveCastDetails.isSuccessResp = false;
                    respOutputGetMoiveCastDetails.errorMessage = serviceError;
                    console("Error In GetMovieCastDetails", serviceError);
                    dispatch({
                        type: actionType,
                        payload: respOutputGetMoiveCastDetails,
                    });
                });
        }
        catch {
            respOutputGetMoiveCastDetails.isServiceCalled = false;
            respOutputGetMoiveCastDetails.isSuccessResp = false;
            console.log("Error in GetMovieCastDetails : No response from service");
            dispatch({
                type: actionType,
                payload: respOutputGetMoiveCastDetails,
            });
        }
    };
};