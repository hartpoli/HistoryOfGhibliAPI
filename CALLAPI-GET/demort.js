const filters = {
    publicationDemographic: ['seinen'],
    status: ['completed'],
    contentRating: ['suggestive']
};

const axios = require('axios');


const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: filters
    });

    console.log(resp.data.data.map(manga => manga.id));
})();

