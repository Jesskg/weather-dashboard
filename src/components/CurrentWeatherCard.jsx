import React,{ useEffect, useState } from "react";

function CurrentWeatherCard(weatherData, timezone) {

  const [times, setTimes ] = useState({
      currentDate: '',
      currentTime: '',
      sunriseTime: '',
      sunsetTime: ''
    });

  useEffect(() => {
  if (!props.weatherData || !props.weatherData.dt) return;

  let currentDateObject = new Date(weatherData.dt * 1000);
  let sunriseDateObject = new Date(weatherDate.sunrise * 1000);
  let sunsetDateObject = new Date(weatherData.sunset * 1000);

  let currentDateString = currentDateObject.toDateString();
  let sunriseDateString = sunriseDateObject.toLocaleTimeString();
  let sunsetDateString = sunsetDateObject.toLocaleTimeString();
  
  let currentTime = currentDateString.substring(16,24);
  let currentDate = currentDateString.substring(0,3) + ', ' + currentDateString.substring(4,15);
  let sunriseTime = sunriseDateString.substring(16,24);
  let sunsetTime = sunsetDateString.substring(16,24);

    setTimes({...times,
      currentDate: currentDate,
      currentTime: currentTime,
      sunriseTime: sunriseTime,
      sunsetTime: sunsetTime
    });
}, []);


  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
        <div className="bg-green-500 text-white py-4 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-2">Current Weather Information</h2>
        </div>
        <div className="p-6">
            <div className="flex justify-center mb-4">
                <div className="bg-green-200 p-2 rounded-full">
                    <img 
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="Weather icon"
                    className="w-16 h-16 "
                />
                </div>
            </div>
            <div className=" mb-4 text-center">
                <p className="text-xl font-medium text-gray-700">{weatherData.weather[0].main}</p>
                <p className="text-gray-500" autoCapitalize="">{props.weatherData.weather[0].description}</p>
                <p className="text-gray-500">{timezone}</p>
            </div>
            <ul className=" space-y-2 ">
                <li className="flex justify-between text-1xl font-bold ">
                <span>Current Date: </span>
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
                  {Math.round(weatherData.temp)}°C
                </span>
                </li>
                <li className="flex justify-between text-1xl font-bold ">
                <span>Feels like: </span>
                <span>
                  {Math.round(weatherData.feels_like)}°C
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