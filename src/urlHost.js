export const URL_HOST = 
    process.env.NODE_ENV === "production"
        ? "https://cors-anywhere.herokuapp.com/http://devOpsPracticeBackend2-env.eba-aqhajsas.us-west-2.elasticbeanstalk.com"
        : "http://127.0.0.1:8000";


        //npm run build for production mode, npm start for development mode
        // devOpsPracticeBackend2-env.eba-aqhajsas.us-west-2.elasticbeanstalk.com