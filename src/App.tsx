import { useState } from "react" 
import axios from "axios"
import CurrentWeatherCard from "./assets/components/CurrentWeatherCard.tsx";


const apiKey = "67e446f3dbfe9249702f62c6e4d4808d";

function App() {
  
  const [location, setLocation] = useState<string>('');

  const [currentWeather, setCurrentWeather] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);


  async function handleLocationSearch(e: React.FormEvent<HTMLFormElement>) {
    
    e.preventDefault()

    let response = await
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    
    setCurrentWeather(response.data);
    setLoading(false);
  };
  
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    
    setLocation(e.target.value);
      }; 
      
      
      return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-green-400 to-white-400 ">
      <h3 className="text-3xl font- bold bg-white bg-opacity-50 rounded-md mx-auto text-gray-800 text-center mt-16 mb-4 ">City Search</h3>

      <div className="mx-auto rounded-md p-4 bg-white bg-opacity-50 shadow-md">
              <h3 className="text-1xl font- bold bg-white bg-opacity-50 rounded-md mx-auto text-gray-800 text-center mb-4 ">What City are you looking for?</h3>

        <form onSubmit={handleLocationSearch}>
          <input type="text" 
          placeholder="Enter location.." 
          name={"location"}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={location}
          onChange={handleChange} 
          />
          <button type="submit" 
                  className="ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 "
                  >Search</button>
        </form>
      </div>

      { !loading && currentWeather?.main &&
      <>
      <div className="mt-16 flex flex-row justify-center space-x-12" >
          <div >
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Current Weather</h3>
              <CurrentWeatherCard weatherData={currentWeather}/>
          </div>
      </div>
      </>
  } 
    </div>
  )
};

export default App
