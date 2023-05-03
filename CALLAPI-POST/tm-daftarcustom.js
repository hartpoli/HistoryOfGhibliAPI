const options = {
    name: 'Hidden Gems',
    visibility: 'public'
};

const sessionToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0eXAiOiJzZXNzaW9uIiwiaXNzIjoibWFuZ2FkZXgub3JnIiwiYXVkIjoibWFuZ2FkZXgub3JnIiwiaWF0IjoxNjY1NTU2MjY4LCJuYmYiOjE2NjU1NTYyNjgsImV4cCI6MTY2NTU1NzE2OCwidWlkIjoiMjg4MGM3N2QtMjU3OS00OTVkLTg3MzItYmEyZDA4MmMxYWUyIiwicm9sIjpbIlJPTEVfVVNFUiJdLCJwcm0iOlsidXNlci5saXN0IiwicmVwb3J0LmNyZWF0ZSIsImNoYXB0ZXIudXBsb2FkIiwic2NhbmxhdGlvbl9ncm91cC5jcmVhdGUiLCJhdXRob3IuY3JlYXRlIiwibWFuZ2EuY3JlYXRlIiwicmF0aW5nLmNyZWF0ZSIsInJhdGluZy5saXN0IiwicmF0aW5nLmRlbGV0ZSIsInNldHRpbmdzLnZpZXciLCJzZXR0aW5ncy5lZGl0Iiwic2V0dGluZ3NfdGVtcGxhdGUudmlldyIsImhpc3RvcnkudmlldyIsInVzZXIuYXZhaWxhYmxlIiwibWFuZ2EudmlldyIsImNoYXB0ZXIudmlldyIsImF1dGhvci52aWV3Iiwic2NhbmxhdGlvbl9ncm91cC52aWV3IiwiY292ZXJfYXJ0LnZpZXciLCJ1c2VyLnZpZXciLCJtYW5nYS5saXN0IiwibWFuZ2FfcmVsYXRpb24ubGlzdCIsImNoYXB0ZXIubGlzdCIsImF1dGhvci5saXN0Iiwic2NhbmxhdGlvbl9ncm91cC5saXN0IiwiY292ZXJfYXJ0Lmxpc3QiXSwic2lkIjoiZTcyNTUyZjEtZjVjYi00YjBmLWJmNWItN2ZiZTRjZDg0MzZkIn0.MvN0OjckdytZLJsPlvm6IC657VtJGbMI7PVdVGwPvUrXESrB3LJl6AS8FItE1SLeZ3nvJ-8ZXGNU9y1H-XQptN4-JXL_bBPMhNIKkyZ5NVedYU_k7DxuAu-vIktvCUjWTLctccjgUaXCdZiRnmQsjVftXXoImKTt5araqenUj1FYx4GouT60YE-hmkH-nRRxSyCtM6__GeUMrI3bb5RaHDr5vQFk_VafVZNREKSozOg89dCRNCenfMyiPj6OXOMI05A0ti9mMOfqy6-077HaU_yxmP6ZUqrSSuieCaToHCph-qb6GVC5ZIR4eDUmnLhQESMXdMmA1c9BF04_5MRown-KRPfsz1aJ842yiySa42vxbbX4ntzqKKxd25PCWwdJUYIcnoa9RAUl5-RU1HvomH3g0YMe-LbZhheGUlcl_4jW0kmTiwmSCDTdHlo0TJReP_6j78_eBZDsCWzuXhTaYHUklacUEgI2uigvP0LXNRm8fxogJOztLWFw34FWfUeM371HbSmLUWNshB-BWBOKFUdWHFXKS7LTYR-DElAmPrWKNHO0-kTLzchY-4c-ThKvkSSe16B8AYJz5WOpgtosnx-zq4f78BWBAjXSCEJTiv0qUhU_TsR7PxYwfNJNba5MUIBJNW6ijPaMIIFMbuBRXk4ljxqw8vRLKDkOD62qOuQ';

const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/list`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        },
        data: options
    });

    console.log('List created with ID:', resp.data.data.id);
})();