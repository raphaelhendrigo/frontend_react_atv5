import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Themes";

const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div style={AppTheme[themeMode+"Container"]}>
		<div style={AppTheme[themeMode]}>
		<h2> Sign up to my Newsletter</h2>
		<input value="my@email.com" />
		<button value="sign up">sign up</button>
		
            <h3 style={{fontSize: 10}}>
                {themeMode === "light" ? "Change to Dark" : "Change to Light"}
            </h3>
</div>
            <button
                
                value={themeMode === "light" ? "dark": "light"}
                onClick={() => setThemeMode(themeMode === "light"? "dark": "light")}>   
					{themeMode === "light" ? "Dark Mode" : "Light Mode"}</button>				
        </div>
    );
}

export default ThemeToggler;