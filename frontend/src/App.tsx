import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AdminPage } from "./pages/AdminPage";
import {Dashboard} from "./pages/Dashboard";
import {Trips} from "./pages/Trips";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPage />} >
        <Route index element ={<Dashboard/>}/>
         { <Route path = "trips" element = {<Trips/>}/> }
      </Route>

      <Route path ="/login" element={<LoginPage />} />
    </Routes>
  );
}
