const mangaID = 'a37d2a4a-6caa-4ff3-84fe-f137f97b207c';

const sessionToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0eXAiOiJzZXNzaW9uIiwiaXNzIjoibWFuZ2FkZXgub3JnIiwiYXVkIjoibWFuZ2FkZXgub3JnIiwiaWF0IjoxNjY1NTU5OTIzLCJuYmYiOjE2NjU1NTk5MjMsImV4cCI6MTY2NTU2MDgyMywidWlkIjoiMjg4MGM3N2QtMjU3OS00OTVkLTg3MzItYmEyZDA4MmMxYWUyIiwicm9sIjpbIlJPTEVfVVNFUiJdLCJwcm0iOlsidXNlci5saXN0IiwicmVwb3J0LmNyZWF0ZSIsImNoYXB0ZXIudXBsb2FkIiwic2NhbmxhdGlvbl9ncm91cC5jcmVhdGUiLCJhdXRob3IuY3JlYXRlIiwibWFuZ2EuY3JlYXRlIiwicmF0aW5nLmNyZWF0ZSIsInJhdGluZy5saXN0IiwicmF0aW5nLmRlbGV0ZSIsInNldHRpbmdzLnZpZXciLCJzZXR0aW5ncy5lZGl0Iiwic2V0dGluZ3NfdGVtcGxhdGUudmlldyIsImhpc3RvcnkudmlldyIsInVzZXIuYXZhaWxhYmxlIiwibWFuZ2EudmlldyIsImNoYXB0ZXIudmlldyIsImF1dGhvci52aWV3Iiwic2NhbmxhdGlvbl9ncm91cC52aWV3IiwiY292ZXJfYXJ0LnZpZXciLCJ1c2VyLnZpZXciLCJtYW5nYS5saXN0IiwibWFuZ2FfcmVsYXRpb24ubGlzdCIsImNoYXB0ZXIubGlzdCIsImF1dGhvci5saXN0Iiwic2NhbmxhdGlvbl9ncm91cC5saXN0IiwiY292ZXJfYXJ0Lmxpc3QiXSwic2lkIjoiM2IxNTVlMGQtYTIxYy00YzE2LTg1ZGUtYmFmNmI1MGVmNzQ0In0.MPTjIR5F9hGK8a1P06uJcuduwfrsowr-lCmanZeAS_KbjSauM6uwJEXJAd82cSUfNlgOUwmSf-igrNBQvi_Dco2jNhU2FqjuYWOJdug4nBiH0zjyY7qznvBUlIoIHtxtq94pPOMUPctGQ2BzG5LK6uw4HHihpgHYSiQhFO025C-sHn_EA6hB6Z7wPqykJ086AnSmmSIF71QFBZg9yhkRynnrpI21JPhNDGj-z8rgPCf6SgrOe0dNOzW1ZB2bFh7vVdDxcscvVHyFtq_OB-U_iYt-Ybq1WUYYHynTWW2pPyDz5Py4ycZ8Asp5QQqIcGXSyE1BWDwWIs6QezyenZGB5K_kvpSLrRvDnVNxVWg9YFBJuAH3guPD23Hv5ChhCvkgLdrrp3f3A5q1fuUhf-b9fRJ7rMRCYbgI08ZZL8ro44nFd4iUhpYBxUdlR7eyRgHvFi5TW5B5YB16Ra2hp3Jd_R_dYTAlhnyC_KFTQrGy0s_QnFdFGn0GCw-V_IZ_4d7oIS_EAM7DAT3kbSsDXi6wP79xNi89LF3KnfopApl-TW34eJs6FTI95y_hgh3ixllh-r5ZR28FrcWDJXeAuPKZKTpT2ZhUY74hj2nE3mipX-Li10rnN03Df-X1KixBKB5Vvn3ZiuCXG_ITPp0eYyMe2kYZzcyX7LCbKNDCvg-ZXxw';
const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/manga/${mangaID}/follow`,
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    });

    console.log(resp.data.result);
})();