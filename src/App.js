import React,{useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import KeyPad from './components/KeyPad/KeyPad';
function App() {

  const[isDarkMode,setIsDarkMode] = useState(false)
  return (
    <div className="app" data-theme={isDarkMode?"dark":""}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkMode ? "app_calculator_navbar_toggle_circle_active" : ""
              }`}
            />
          </div>
          <img src={isDarkMode ? "https://raw.githubusercontent.com/handyDev2/react-calculator/master/src/assets/moon.png" : "https://github.com/handyDev2/react-calculator/blob/master/src/assets/sun.png?raw=true"} alt="mode" />
        </div>
     <Header/>
     <KeyPad/>
      
    </div>
    </div>
  );
}

export default App;
