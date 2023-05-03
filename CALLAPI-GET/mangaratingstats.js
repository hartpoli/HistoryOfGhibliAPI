const mangaID = 'f98660a1-d2e2-461c-960d-7bd13df8b76d';
const axios = require('axios');
const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/statistics/manga/${mangaID}`
    });

    const { rating, follows } = resp.data.statistics[mangaID];

    console.log(
        'Nilai rata-rata :', rating.average, '\n' +
        'Bayesian Rating :', rating.bayesian, '\n' +
        'Mengikuti :', follows
    );
})();