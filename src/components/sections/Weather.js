"use client";

import Input from "../forms/Input";
import Button from "../ui/Button";
import WeatherIcon from "../icons/WeatherIcon";
import { useWeather } from "@/hooks/useWeather";

function Weather() {
  const { city, setCity, fetchWeather } = useWeather();

  return (
    <div className="w-full">
      <div className="bg-gray-100 border-2 border-gray-200 rounded-t-md p-4 mt-[20px]">
        <h3 className="text-xl font-bold">Location</h3>
      </div>
      <div className="border-l-2 border-r-2 border-gray-200 p-[8px] font-bold">
        <Input
          label="City"
          className="w-auto font-normal"
          value={city}
          changeHandler={setCity}
        />
      </div>
      <div className="bg-gray-100 border-2 border-gray-200 rounded-b-md p-2 flex justify-center">
        <Button
          text="Get Weather"
          icon={<WeatherIcon size={20} />}
          className="pl-3 pr-3"
          clickHandler={fetchWeather}
        />
      </div>
    </div>
  );
}

export default Weather;
