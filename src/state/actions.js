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
    const serviceURI = `${serviceProps.getUpcomingMovie.uri}?page=${page}`;

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