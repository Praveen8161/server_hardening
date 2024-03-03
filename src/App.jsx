import { Route, Routes } from "react-router-dom";
import "./App.css";
import Server_hardening from "./Pages/Server_hardening";
import "react-datepicker/dist/react-datepicker.css";
import NoPage from "./Pages/NoPage";
import FeedBackPage from "./Pages/FeedBackPage";
import Network_security from "./Pages/Network_security";
import API_Security from "./Pages/API_Security";
import Web_security from "./Pages/Web_security";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/server" element={<Server_hardening />} />
        <Route exact path="/" element={<Network_security />} />
        <Route exact path="/network" element={<Network_security />} />
        <Route exact path="/api" element={<API_Security />} />
        <Route exact path="/web" element={<Web_security />} />
        <Route exact path="/feedback" element={<FeedBackPage />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
