import { useEffect, useState } from "react"


const useApiFetch =(originUrl)=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(originUrl)


const callApiFetch=async()=>{
    try{
        const response=await fetch(url)

        if(!response.ok){
            throw new Error(`error en la solicitud de la api`)
        }
        const responseJson= await response.json()
        setData(responseJson)

    }
    catch(err){setError(err)

    }
    finally{
        setLoading(false)
    }

}

    useEffect(()=>{
callApiFetch()},[url]
    
    )



    return {data,loading,
        error}

    }


export default useApiFetch