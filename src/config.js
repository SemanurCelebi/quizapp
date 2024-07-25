import config from '../config.json'

export default {
    getApiToken() {
        return config.apiToken;
    }
};