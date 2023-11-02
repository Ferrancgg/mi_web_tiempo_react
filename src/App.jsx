
import './App.css'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import WeatherCity from './pages/WeatherCity/WeatherCity'
import CitySelector from './pages/CitySelector/CitySelector'
import { Outlet } from 'react-router-dom'



function App() {


  return (
    <>
    <Header/>

    <Outlet/>
    {/* <WeatherCity/> */}
    {/* <Home/> */}
    {/* <CitySelector/> */}
   
    <Footer/>
  
      
    </>
  )
}

export default App
