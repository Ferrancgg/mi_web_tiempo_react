// import { useEffect, useState } from "react"

import { useEffect, useState } from "react";

// const useFetch =()=>{

//     const [data,setData]=useState(null)
//     const [loading,setLoading]=useState(true)

//     useEffect(()=>{
// setLoading(true)

//     fetch (" https://jsonplaceholder.typicode.com/users")
//     .then ((response)=>response.json())
//     .then ((data)=>setData(data))
//     .finally(()=>setLoading(false))
//     },[])

//     return{data,loading}
// }

// export default useFetch

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [controller, setController] = useState(null);

//   useEffect(() => {
//     const abortController = new AbortController();
//     setController(abortController);
//     setLoading(true);
//     try {
//       fetch(url, { signal: abortController.signal })
//         .then((response) => response.json())
//         .then((data) => setData(data))
//         .catch((error) => {
//           if (error.name === "AbortError") {
//             console.log("request cancelled");
//           } else {
//             setError(error);
//           }
//         })
//         .finally(() => setLoading(false));
//     } catch (error) {
//       console.error("hay un error");
//     }

//     return () => abortController.abort();
//   }, []);

//   const handleCancelRequest = () => {
//     if (controller) {
//       controller.abort();
//       setError("request canceled");
//     }

//   };

//   return { data, loading, error, handleCancelRequest };
// };

// export default useFetch;

// (/////////////////////////////)


// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // const abortController = new AbortController();
//     try {
//       setLoading(true);
//     //   fetch(url, { signal: abortController.signal })
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => setData(data))
//         .catch((error) => {
//           setError(error);
//           console.error("error en el interior del fetch", error);
//         })
//         .finally(() => setLoading(false));
//     } catch (error) {
//       setError("error");
//       console.log(" hay un error 1");
//     }
//     // return () => abortController.abort();
//   }, []);

//   return { data, loading, error };
// };
// export default useFetch;


// /////////////////////////////////


import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('La solicitud no pudo completarse correctamente');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (fetchError) {
        setError(fetchError);
        console.error('Error en la solicitud:', fetchError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
