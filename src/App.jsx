import { WeatherContext } from "./components/context";
import Header from "./components/Header";
import Background from "./components/Background";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [fetchedData, setFetchedData] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();


  // store
  const store = {
    fetchedData,
    city,
    setCity,
    setCountry,
    setFetchedData,
    days,
  };

  return (
    <WeatherContext.Provider value={store}>
      <div className="min-h-screen">
        <Header />
        <Background />
        <Main />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
