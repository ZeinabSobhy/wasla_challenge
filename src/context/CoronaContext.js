import React, { useState, useEffect } from "react";
import { getAllCountry , getonfirmedAndDeaths } from "../Api/Coron";

const CoronaContext = React.createContext([{}, () => {}]);

const CoronaProvider = ({ children }) => {
  const [Corona, setCorona] = useState([]);
  useEffect(() => {
    getAllCountry().then(
      (res) => {
        setCorona(res?.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [Corona]);



  

  return (
    <CoronaContext.Provider value={[Corona, setCorona ]}>
      {children}
    </CoronaContext.Provider>
  );
};

export { CoronaProvider, CoronaContext };



