import  { useEffect, useState } from 'react'

const useGeolocation = () => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          setIsLoading(false); // Cuando los datos se cargan, establece isLoading en false.
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
          setIsLoading(false); // En caso de error, también establece isLoading en false.
        }
      );
    }, []);
  
    return { lat, lon, isLoading };
  };
  
  export default useGeolocation;
  