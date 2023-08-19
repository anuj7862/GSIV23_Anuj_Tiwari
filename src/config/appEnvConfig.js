import axios from "axios";

//-----------------------------------------------
export const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAyZThiMjZjMzJiZTQ3MDg3ZDU2ZmViNzNkNDA0OSIsInN1YiI6IjY0ZGYxZjAzNWFiODFhMDExYzJlNmE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gytl9Yob5RTsfLxD_C_1qjq9y6ANcsFJ4XidtuDsHZA";
//-----------------------------------------------
export const environmentInfo = {
    currentEnv : 'dev',
    environment : {
        dev : 'DEV',
        sit : 'SIT',
        cert : 'CERT',
        prod : 'PROD'
    },
    appVersion : {
        dev : 'GSIV23 v1.0.0.230819',
        sit : 'GSIV23 v1.0.1.230819',
        cert : 'GSIV23 v1.0.2.230819',
        prod : 'GSIV23 v1.0.3.230819',
    }
};

console.log("Current Environment Version ", environmentInfo.environment[environmentInfo.currentEnv]);

export const axiosInstances = {
    tmdbBaseService : axios.create({
        baseURL: 'https://api.themoviedb.org/3',
    }),
};

export const serviceProps = {
    getUpcomingMovie : {
        uri : '/movie/upcoming',
    },

    getMoviePoster : {
        uri: 'https://image.tmdb.org/t/p/w200/',
    }
};
