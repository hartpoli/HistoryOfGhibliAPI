const mangaID = '391b0423-d847-456f-aff0-8b0cfc03066b';

const sessionToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0eXAiOiJzZXNzaW9uIiwiaXNzIjoibWFuZ2FkZXgub3JnIiwiYXVkIjoibWFuZ2FkZXgub3JnIiwiaWF0IjoxNjY1NTYwNTc1LCJuYmYiOjE2NjU1NjA1NzUsImV4cCI6MTY2NTU2MTQ3NSwidWlkIjoiMjg4MGM3N2QtMjU3OS00OTVkLTg3MzItYmEyZDA4MmMxYWUyIiwicm9sIjpbIlJPTEVfVVNFUiJdLCJwcm0iOlsidXNlci5saXN0IiwicmVwb3J0LmNyZWF0ZSIsImNoYXB0ZXIudXBsb2FkIiwic2NhbmxhdGlvbl9ncm91cC5jcmVhdGUiLCJhdXRob3IuY3JlYXRlIiwibWFuZ2EuY3JlYXRlIiwicmF0aW5nLmNyZWF0ZSIsInJhdGluZy5saXN0IiwicmF0aW5nLmRlbGV0ZSIsInNldHRpbmdzLnZpZXciLCJzZXR0aW5ncy5lZGl0Iiwic2V0dGluZ3NfdGVtcGxhdGUudmlldyIsImhpc3RvcnkudmlldyIsInVzZXIuYXZhaWxhYmxlIiwibWFuZ2EudmlldyIsImNoYXB0ZXIudmlldyIsImF1dGhvci52aWV3Iiwic2NhbmxhdGlvbl9ncm91cC52aWV3IiwiY292ZXJfYXJ0LnZpZXciLCJ1c2VyLnZpZXciLCJtYW5nYS5saXN0IiwibWFuZ2FfcmVsYXRpb24ubGlzdCIsImNoYXB0ZXIubGlzdCIsImF1dGhvci5saXN0Iiwic2NhbmxhdGlvbl9ncm91cC5saXN0IiwiY292ZXJfYXJ0Lmxpc3QiXSwic2lkIjoiZTcyNTUyZjEtZjVjYi00YjBmLWJmNWItN2ZiZTRjZDg0MzZkIn0.DKZZ_4fxfRsL85po_de7Ssmv4nQgL8rPwnK6-lgnW6IN0O-NPHjDDuf51U6xdyNXVwmjLqtbupPJpgS3eHKpvbJbh7_-dgOgS40txp8Ge4G5ASClxa3IRkDPBwkCIjphhpVaVdcCObX7i8ZOX71RFYM2m0Rjo3UpGmiLacfAdmxjGztLWxqWrL6VRgwOyvuAWGKVH2a5XxYnJ-W2eqraAWTkjyN8ipFVyYFJHurLYbaHg7vUc6kO1Y80zsDO27E6UrFsQ5QGgxCOaUS06o0AuzicJl65_9NjbGtHRDxyl_IyVwP1gA8u8bULwfjol-Nx8NNzX_fhDt-OmG7bk1ieAMaN-Pg9_1ZjnYS5pQUuzO20s-i7HudmYOpy8lxLyz6eTI-1Z9GP06qKXrzM5lv89UgKMP2mnk1c_7jaWKrmV-jtHHtnigwI5tXCWjoXU5j2UiwhHBYkLDqXPZOjeettACS2ngUcSzA5WyvIyMwzkopzkNACtU3FHn1pYDZn4Zm07IyWuSO7b79piBs6zJT5v6nvRqm-c8SUR6OjyWyXmhA9t2lSZuJfcFW2mmdwCMFCKOVuA7aD6ukCSi7vv98PTxdUJnxK55cLS8KCaV7jFMj6oVX4cC-k0VY7C91FA6EOW1wEOU_jvgB0FUsu2nWVo4nVoDdwVcNB3cg8262_sx0';
const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/manga/${mangaID}/read`,
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    });

    console.log(resp.data);
})();