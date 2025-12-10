import React, { useState, useEffect, createContext, type Dispatch, type SetStateAction } from "react";
import Header from "./Navigation";
import Aoscompo from "../../Util/aos";


interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>; 
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {}, 
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);


  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Aoscompo>
        <Header theme={theme} setTheme={setTheme} />
        {children}
      </Aoscompo>
    </ThemeContext.Provider>
  );
};

export default Layout;
