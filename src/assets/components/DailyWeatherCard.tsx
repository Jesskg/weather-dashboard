
/*
function DailyyWeatherCard( {dailyWeatherData}: {dailyWeatherData: any} ) {

    const date = new Date(dailyWeatherData.dt * 1000).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    const time = new Date(dailyWeatherData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <div className="mt-4 p-4 bg-white bg-opacity-50 shadow-md rounded-md 
         flex flex-col items-center text-center min-w-56">

        <p className="text-lg font-semibold text-black">{date}</p>
        <p className="text-lg font-semibold text-black">{time}</p>
        </div>
    )
}

export default DailyyWeatherCard
*/

