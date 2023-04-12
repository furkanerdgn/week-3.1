import { Fragment, useEffect, useState } from "react";
import partly from "./assets/partly.png";
import { fetchWeatherForecast } from "./api/weatherApi";

function App() {

  useEffect(() => {
    fetchWeatherForecast(1)
  }, [])







  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between bg-gray-50 flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 gap-3 text-black mr-6">
          <img src={partly} alt="header image" className="h-10 w-10 cursor-pointer" />
          <h2 className="font-bold text-4xl hidden md:block tracking-tight">
           Daily Weather
          </h2>
        </div>
        <div className=" p-6 w-2/4 flex gap-2 justify-center border-bottom-2">
          <div>
            <div className="relative">
              <input
                type="text"
                id="city"
                className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="city"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1"
              >
                City
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 top-4 mr-3 -right-0 opacity-5 cursor-pointer stroke-blue-500 absolute hover:opacity-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
             </svg>

            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-lg ">
      <div className="absolute top-20 mix-blend-multiply filter blur-xl opacity-70 animate-blop animation-delay-2000 -right-1 w-72 h-72 bg-pink-300 rounded-full"/> 
      <div className="absolute top-20 mix-blend-multiply filter blur-xl opacity-70 animate-blop animation-delay-4000 -left-1 w-72 h-72  bg-yellow-300 rounded-full"/>
      <div className="absolute top-32 mix-blend-multiply filter blur-xl opacity-70 animate-blop left-28 s w-72 h-72 bg-blue-300 rounded-full"/>
    </div>
  </div>
  </div>




  );
}

export default App;
