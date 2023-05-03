// Cari menggunakan Query
const title = 'Point Gifter Keikenchi Bunpai Nouryokusha no Isekai Saikyou Solo Life';

const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: {
            title: title
        }
    });

    console.log(resp.data.data.map(manga => manga.id));
})();