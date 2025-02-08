import { useWeather } from "@/hooks/useWeather";

function WeatherWidget() {
  const { weather, loading, error } = useWeather();

  return (
    <div className="self-center">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <div className="flex justify-between items-center">
            <img src={weather.icon} alt="Weather icon" />
            <p>🌡 {Math.round(weather.temperature)}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;
