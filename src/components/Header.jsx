import React, { useContext } from "react";
import partly from "../assets/partly.png";
import { useState } from "react";
import { WeatherContext } from "./context";
import { fetchForecastWeek, fetchForecastWeekWithCoords } from "../api/weatherApi";

function Header() {
  const [error, setError] = useState(false);
  const [inputCity, setInputCity] = useState("");


  const {
    setCity,
    city,
    country,
    setCountry,
    setFetchedData,
  } = useContext(WeatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchData = await fetchForecastWeek(inputCity);
    if (fetchData) {
      setCity(fetchData.city.name);
      setCountry(fetchData.city.country);
      setFetchedData(fetchData.list.filter((item,index) => index % 8 === 0));
      setError(false);
    } else {
      setError(true);
    }
    setInputCity("");
  };

  const handleLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const fetchData = await fetchForecastWeekWithCoords(
          position.coords
        );
        if (fetchData) {
          setCity(fetchData.city.name);
          setCountry(fetchData.city.country);
          setFetchedData(fetchData.list.filter((item,index) => index % 8 === 0));
          setError(false);
        } else {
          setError(true);
        }
      });
    }
  };









  return (
    <nav className="flex items-center justify-between bg-slate-100 backdrop:blur-xl md:px-20 shadow-sm flex-wrap p-6 border-b-2 ">
      <div className="flex items-center flex-shrink-0 gap-3 text-black mr-6">
        <img
          src={partly}
          alt="header image"
          className="h-12 w-12 cursor-pointer"
        />
        <h2 className="font-bold font-mono text-4xl hidden md:block tracking-tight">
          Daily Weather
        </h2>
      </div>
      <div className=" p-6 w-2/4 flex gap-2 justify-center border-bottom-2">
        <div className="flex gap-3 items-center">
          <button onClick={handleLocation} className="hover:bg-slate-200 rounded p-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-current-location stroke-blue-600" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
              <path d="M12 2l0 2"></path>
              <path d="M12 20l0 2"></path>
              <path d="M20 12l2 0"></path>
              <path d="M2 12l2 0"></path>
          </svg>
          </button>
            <div className="relative">            
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="city"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="city"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1"
              >
                City
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleSubmit}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 top-4 mr-3 -right-0 opacity-5 cursor-pointer stroke-blue-500 absolute hover:opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </form>
          </div>
          {error && (
            <label className="text-red-400 text-base m-1">
              Error Bad Request
            </label>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
