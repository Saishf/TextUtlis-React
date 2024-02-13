import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "black";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils Dark Mode";
      // setInterval(() => {
      //   document.title = "download textutils app now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install now to get 40% off"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils Light Mode";
    }
  };

  return (
    <>
    
      {/* <Router> */}
        <Navbar
          title="TextUtlis"
          aboutText="about"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          
        <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze"
              />
          {/* <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route
              exact
              path="/"
              element={
                
              }
            ></Route>
          </Routes> */}
        </div>
        
      {/* </Router> */}
      
    </>
  );
}

export default App;
