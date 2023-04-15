import React, { useEffect } from "react";
import { useContext } from "react";
import { WeatherContext } from "./context";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Main() {
  const { fetchedData,days,city,country} =
    useContext(WeatherContext);

    // selected day attributes

  const [selectedCity, setSelectedCity] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [selectedWheatherType, setSelectedWheatherType] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(false);
  const [selectedTemp, setSelectTemp] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [selectedDayHandle, setSelectedDayHandle] = useState(false);

  // handle selected day
  useEffect(() => {

    if(fetchedData){ 
      setSelectedCity(city);
      setSelectedCountry(country);
      setSelectedWheatherType(fetchedData[0].weather[0].main);
      setSelectedDescription(fetchedData[0].weather[0].description);
      setSelectedIcon(fetchedData[0].weather[0].icon);
      setSelectTemp(fetchedData[0].main.temp);
    }
  }, [fetchedData]);

  
  useEffect(() => {
    if(selectedDayHandle){
    setSelectedWheatherType(selectedDayHandle.weather[0].main);
    setSelectedDescription(selectedDayHandle.weather[0].description);
    setSelectedIcon(selectedDayHandle.weather[0].icon);
    setSelectTemp(selectedDayHandle.main.temp);
    const date = new Date(selectedDayHandle.dt_txt);
    setSelectedDay(date.getDay());
    }
  }, [selectedDayHandle]);

  return selectedCity ? (
    <section className="flex flex-col h-full m-16 ">
      <div className="flex flex-col  md:flex-row gap-2">
        <div className="md:w-1/3 backdrop-blur-xl bg-slate-100 border-4 border-gray-50 shadow-xl p-8 h-full ">
          <div className="flex flex-wrap h-full flex-col items-center backdrop:blur-xl ">
            <img
              className="w-24 h-24 ease-in duration-150 transform hover:scale-125"
              src={`https://openweathermap.org/img/wn/${selectedIcon}@2x.png`}
              alt="weather icon"
            />
            <h1 className="text-4xl text-center">
              {selectedCity} <small className="text-xs">{selectedCountry}</small>
            </h1>
            <p className="font-thin mt-4 text-4xl text-center">
              {Math.floor(selectedTemp)}
              <span>°C</span>
            </p>
            <p className="font-thin mt-4 text-center">{selectedWheatherType}</p>
            <p className="font-thin text-center">{selectedDescription}</p>
            <h1 className="italic text-xl mt-2">{days[selectedDay]}</h1>
          </div>
        </div>  
          <div className="w-full flex gap-4 text-center p-4  h-full backdrop-blur-xl border-3 border-gray-50 shadow-xl overflow-scroll md:overflow-hidden">
            {
              fetchedData.map((item, index) => {
                return (
                  <div key={uuidv4()} onClick={()=>setSelectedDayHandle(item)} className="min-w-[7rem] hover:scale-125 ease-in duration-150 min-h-[6rem] mt-5 mb-5 w-full h-full shadow-xl p-6 ">
                    <h1>{days[new Date(item.dt_txt).getDay()]}</h1>
                    <img className="w-12 h-12 mx-auto" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" />
                    <p>{item.weather[0].main}</p>
                    <p>{Math.floor(item.main.temp)}°C</p>
                </div>
                );

          })
} 
          </div>
      </div>
    </section>
  ) : (
    <section className="flex flex-col m-16 h-screen">
      <h1 className="text-4xl text-center">Enter a valid city</h1>
    </section>
  );
}

export default Main;
