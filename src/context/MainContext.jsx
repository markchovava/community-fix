import React, { useState, useEffect, createContext } from 'react';
import RoadData from '../data/RoadData.json'

export const MainContext = createContext()

const MainContextProvider = ({ children }) => {
    const allRoads = RoadData;
    const [loading, setLoading] = useState(false)
    
  return (
    <div>
      <MainContext.Provider value={{
        loading,
        setLoading,
        allRoads
      }}>
        {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainContextProvider;