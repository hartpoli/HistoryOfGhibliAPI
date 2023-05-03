const mangaID = '7c145eaf-1037-48cb-b6ba-f259103b05ea';
const languages = ['en'];

const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/manga/${mangaID}/feed`,
        params: {
            translatedLanguage: languages
        }
    });

    console.log("ID CHAPTER: ", resp.data.data.map(chapter => chapter.id));
})();