import { Route, Routes } from "react-router-dom";
import "./App.css";
import Server_hardening from "./Pages/Server_hardening";
import "react-datepicker/dist/react-datepicker.css";
import NoPage from "./Pages/NoPage";
import FeedBackPage from "./Pages/FeedBackPage";
import Security from "./Components/Security";
import Network_security from "./Pages/Network_security";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/server" element={<Server_hardening />} />
        <Route exact path="/" element={<Network_security />} />
        <Route exact path="/feedback" element={<FeedBackPage />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
