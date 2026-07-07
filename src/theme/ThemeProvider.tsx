import React, {
    createContext,
    useContext,
    useState
} from "react";

import {
    darkTheme,
    lightTheme
} from "./themes";


type ThemeContextType = {

  theme:
  typeof lightTheme;

  toggleTheme:()=>void;

};


const ThemeContext =
createContext<ThemeContextType | null>(null);



export function ThemeProvider({
  children
}:{
  children:React.ReactNode;
}){


const [isDark,setIsDark]
=
useState(false);



function toggleTheme(){

 setIsDark(prev=>!prev);

}



return (

<ThemeContext.Provider

value={{

 theme:isDark
 ? darkTheme
 : lightTheme,

 toggleTheme

}}

>

{children}

</ThemeContext.Provider>


);

}




export function useTheme(){

const context =
useContext(ThemeContext);


if(!context){

throw new Error(
"useTheme must be inside ThemeProvider"
);

}


return context;

}