export function ApiEndPoint(){

    const base = "https://protax-api.printftech.com/api/RcUser";


    // for get api
    const getApi =`${base}/Get`;

    //for post api
    const postApi = `${base}/Create`;

    //for delete api
    const deleteApi = `${base}/Delete`

    //for put api
    const updateApi = `${base}/Update`

    return {
        getApi,
        postApi,
        deleteApi,
        updateApi   
    }

}


export default ApiEndPoint