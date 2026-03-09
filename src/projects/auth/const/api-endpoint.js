export function ApiEndpoint(){

    const base = 'https://auth-service.fluoce.com'

    const otp = `${base}/email`
    // { email: ""}

    const verify = `${base}/email/verify`
    // { email:"", otp:""}
    // res = { code: ""}

    const exchange = `${base}/exchange`
    //{ code : ""}
    // res = { accessToken: ""}

    // GET
    const profile = `${base}/me`
    // { Authoriztion: `Bearer ${code}` }

    //res = { user }

    return {
        base,
        otp,
        verify,
        exchange,
        profile
    }
}