import React,{ useState } from "react";
import axios from "axios";
import CurrentWeatherCard from "./components/CurrentWeatherCard";


const API_KEY = "67e446f3dbfe9249702f62c6e4d4808d";

function App() {
  
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0
  }
  );

  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(true);
  const [timezone, setTimezone] = useState('');

  async function handleLocationSearch(e) {
    
    e.preventDefault()
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}&units=metric`);
    
    setCurrentData(response.data.current);
    setTimezone(response.data.timezone);
    setLoading(false);

  };
  
  function handleChange (e) {
    
       setCoordinates({...coordinates, [e.target.name]: Number(e.target.value)});
      }; 
      
      
      return (
    <div className="w-screen h-screen flex justify-content: center flex-col bg-gradient-to-b from-green-400 to-white-400 ">
      <h3 className="text-3xl font-bold bg-white bg-opacity-50 rounded-md mx-auto text-gray-800 text-center mt-16 mb-4 ">Find Your City!</h3>

      <div className="p-6 bg-white bg-opacity-50 rounded-lg mx-auto shadow-md max-w-md"> 
        
        <h3 className="text-1xl font- bold bg-white bg-opacity-50 rounded-md text-gray-800 text-center mb-4 ">What City are you looking for?</h3>

        <form onSubmit={handleLocationSearch} className="space-y-4">
          <input 
          placeholder="Latitude.." 
          name={"latitude"}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange} 
          type="number"
          min={-90}
          max={90}
          step={0.01}
          required
          />
           <input 
          placeholder="Longitude.." 
          name={"longitude"}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange} 
          type="number"
          min={-180}
          max={180}
          step={0.01}
          required
          />
          <button 
          type="submit" 
          className="w-full ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 "
          >Search</button>
        </form>
      </div>
      {!loading && 
      <>
      <div className="text-2xl font-semibold flex mt-16 justify-center flex-row">
        <div className="mt-8 mx-auto">
          <h3 className="text-2xl font-bold bg-white bg-opacity-50 rounded-md mx-auto text-gray-800 text-center mb-4 ">Current Weather Data</h3>
          <CurrentWeatherCard weatherData={currentData} timezone={timezone} />
        </div> 
      </div>
      </>
      };
    </div>
  )
};

export default App;
