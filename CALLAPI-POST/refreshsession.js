const refreshToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0eXAiOiJyZWZyZXNoIiwiaXNzIjoibWFuZ2FkZXgub3JnIiwiYXVkIjoibWFuZ2FkZXgub3JnIiwiaWF0IjoxNjY1NTE1MDU3LCJuYmYiOjE2NjU1MTUwNTcsImV4cCI6MTY2ODEwNzA1NywidWlkIjoiMjg4MGM3N2QtMjU3OS00OTVkLTg3MzItYmEyZDA4MmMxYWUyIiwic2lkIjoiZTcyNTUyZjEtZjVjYi00YjBmLWJmNWItN2ZiZTRjZDg0MzZkIn0.iwnxlmvN0z33XMDXex9Qwm8NtVbjHPL5EdRHpX6GBill-4d0mIoFVI2IjSa3h4RXuDQvb5gMk_zt52LiBXXM-y0AJ2o-LbUfVe0r_wQQhW3B4uaZ0B8XwnwZpCeHCgYdK0mzSe-LsCDh2QuQhImetVV-s0E6vmMZLkaPkooKiS0PSMECQ5Sa2gsJoI72iBAYrFhLVr_oxKAOinZjL_v1iFz-bUFxOnVQNhqYHyDcphQSvZ0HCHxjYu2PLHyRmnQJVvyPm2wQYqFpXkD5sT4cEm8QfHK0ckjJ9vWsHuhqreZbPYefcC2VcRo2A91Tv2m-qhDyZ7sO2rlnMRDcBCX28iG32-o1cgwd6n1cKmWnqbDUHcsb7z34h2rFYEfDYLgXlPGzlLf4ECTfe8caNHMWp7rgWR8CAHB7tbK4g9g5NKYydrFoQFcasoYbkdjcThXc-Ry0i31z7uaWCfaJx_bJzW_matyYlFOp-PaiDAhsT_dP0u1afCQJeWpfqgsMtGn9oy_J3bZN7T57Njh1JBLNMb4FRRigUM0pU6j6QNoeIBkxIiwmVGdk4oUj8RCLGir1S-eliIvy50Q8-smyC91IJZgFeTZIVNrQFWsr-E8JocYjKELzw6a9LKkphcSKFKCnDgWeDvi_v4iBLzKB_Jcn_dz7qkJm5uXTuExzzypxgRM';

const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/auth/refresh`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            token: refreshToken
        }
    });

    const sessionToken = resp.data.token.session;
    const expires = new Date().valueOf() + 15 * 60000

    console.log("Session Tokennya adalah : " + sessionToken, "Expiresnya : " + expires, "Refresh Tokennya :" + refreshToken );
})();