import { useEffect, useState } from "react";

function CurrentWeatherCard(props: { weatherData: any}) {

  const [times, setTimes ] = useState<any>({
      currentDate: '',
      currentTime: '',
      sunriseTime: '',
      sunsetTime: ''
    });

  useEffect(() => {
  if (!props.weatherData || !props.weatherData.dt) return;

  let currentDateObject = new Date(props.weatherData.dt * 1000);
  let sunriseDateObject = new Date(props.weatherData.sys?.sunrise * 1000);
  let sunsetDateObject = new Date(props.weatherData.sys?.sunset * 1000);
  

  setTimes({
    currentDate: currentDateObject.toDateString(),
    currentTime: currentDateObject.toLocaleTimeString(),
    sunriseTime: sunriseDateObject.toLocaleTimeString(),
    sunsetTime: sunsetDateObject.toLocaleTimeString(),
  });
}, [props.weatherData]);


  return (
    <div className="mt-4 p-4 bg-white bg-opacity-50 shadow-md rounded-md">
        <div className="mb-4 bg-green-500 text-white p-2 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-2">Current Weather Information</h2>
        </div>
        <div className="p-6">
            <section className="text-center font-semibold gap-2 text-4xl">
                {props.weatherData.name}, {props.weatherData.sys?.country}
            </section>
            <div className=" mb-4 text-2xl font-bold p-4">
                <p className="text-xl font-medium text-gray-700">{props.weatherData.weather?.[0]?.main}</p>
                <p className="text-gray-500">{props.weatherData.weather?.[0]?.description}</p>
                <img 
                    src={`http://openweathermap.org/img/wn/${props.weatherData.weather?.[0]?.icon}@2x.png`}
                    alt={props.weatherData.weather?.[0]?.description || "Weather icon"}
                />
            </div>
            <ul className=" space-y-2 mt-4">
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
                <span>Temperature: </span>
                <span>
                  {Math.round(props.weatherData.main?.temp - 273.15)}°C
                </span>
              </li>
                <li className="flex justify-between text-1xl font-bold  ">
                <span>Feels like: </span>
                <span>
                  {Math.round(props.weatherData.main?.feels_like - 273.15)}°C
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