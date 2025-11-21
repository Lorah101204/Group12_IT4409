import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Login from "./pages/LogInPage";
import Signup from "./pages/SignUpPage";

function App() {
  //toplvl component

  const [view, setView] = useState("login"); //default view

  return (
    <div className="App">
      {view === "login" ? (
        <Login onSwitch={() => setView("signup")} />
      ) : (
        <Signup onSwitch={() => setView("login")} />
      )}
    </div>
  );
}

export default App;
