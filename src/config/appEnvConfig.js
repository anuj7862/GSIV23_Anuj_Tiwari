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
