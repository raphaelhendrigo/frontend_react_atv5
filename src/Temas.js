import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggler from "./ThemeToggler";

export default function Temas() {
  const themeHook = useState("light");
  return(
    <ThemeContext.Provider value = {themeHook}>
       <ThemeToggler/>
    </ThemeContext.Provider>
  );
}