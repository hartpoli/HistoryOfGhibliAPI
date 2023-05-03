const creds = {
    username: 'hartpoli',
    password: 'hart2003'
};

const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: creds
    });

    const refreshToken = resp.data.token.refresh;

    console.log("Refresh Tokennya : " + refreshToken );
})();