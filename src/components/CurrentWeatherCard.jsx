import React,{ useEffect, useState } from "react";

function CurrentWeatherCard({weatherData, name}) {

  const [times, setTimes ] = useState({
      currentDate: '',
      currentTime: '',
      sunriseTime: '',
      sunsetTime: ''
    });

  useEffect(() => {
  
  let currentDateObject = new Date((weatherData.dt + weatherData.timezone)* 1000);
  let sunriseDateObject = new Date((weatherData.sys.sunrise + weatherData.timezone)* 1000);
  let sunsetDateObject = new Date((weatherData.sys.sunset + weatherData.timezone)* 1000);

  let currentDateString = currentDateObject.toDateString();
  let currentTimeString = currentDateObject.getUTCHours() + ':' + String(currentDateObject.getUTCMinutes()).padStart(2,'0');
  let sunriseDateString = sunriseDateObject.getUTCHours() + ':' + String(sunriseDateObject.getUTCMinutes()).padStart(2,'0');
  let sunsetDateString = sunsetDateObject.getUTCHours() + ':' + String(sunsetDateObject.getUTCMinutes()).padStart(2,'0');
  
  let currentTime = currentTimeString;
  let currentDate = currentDateString;

  let sunriseTime = sunriseDateString;
  let sunsetTime = sunsetDateString;

    setTimes({...times,
      currentDate: currentDate,
      currentTime: currentTime,
      sunriseTime: sunriseTime,
      sunsetTime: sunsetTime
    });

    console.log(currentDateObject);
}, [weatherData]);


  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
        <div className="bg-green-500 text-white py-4 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-2">Current Weather Information</h2>
        </div>
        <div className="p-6">
            <div className="flex justify-center mb-4">
                <div className="bg-green-200 p-2 rounded-full">
                    <img 
                    src={`http://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
                    alt="Weather icon"
                    className="w-16 h-16 "
                />
                </div>
            </div>
            <div className=" mb-4 text-center">
                <p className="text-xl font-medium text-gray-700">{weatherData.weather?.[0]?.main}</p>
                <p className="text-gray-500" autoCapitalize="">{weatherData.weather?.[0]?.description}</p>
                <p className="text-gray-500">{weatherData.name}</p>
            </div>
            <ul className=" space-y-2 ">
                <li className="flex justify-between text-1xl font-bold ">
                <span>Current Date:  </span>
                <span>
                  {times.currentDate}
                </span>
                </li>
                <li className="flex justify-between text-1xl font-bold ">
                <span>Current Time: </span>
                <span>
                  {times.currentTime}
                </span>
                </li>
                <li className="flex justify-between text-1xl font-bold ">
                <span>Current Temp: </span>
                <span>
                  {Math.round(weatherData.main.temp)}°C
                </span>
                </li>
                <li className="flex justify-between text-1xl font-bold ">
                <span>Feels like: </span>
                <span>
                  {Math.round(weatherData.main.feels_like)}°C
                </span>
              </li>
                <li className="flex justify-between text-1xl font-bold ">
                <span>Sunrise: </span>
                <span>
                  {times.sunriseTime}
                </span>
                </li>
                <li className="flex justify-between text-1xl font-bold ">
                <span>Sunset: </span>
                <span>
                  {times.sunsetTime}
                </span>
                </li>
            </ul>
          </div>
    </div>
  )
}

export default CurrentWeatherCard;