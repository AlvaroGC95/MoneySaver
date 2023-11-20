import React from "react";
import Navbar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home.pages';
import SavingGoalPage from "./pages/savingGoal";
import Login from "./pages/login";
import { Authenticated, Unauthenticated } from "./components/authenticated";
import Signup from "./pages/signup";
import UserDashboard from "./pages/userDashboard";

const App = () => {
 
  return (
      <div className="App">
      <Navbar />
      <Routes>
            <Route path="userDashboard" element = { <Authenticated> <UserDashboard /> </Authenticated>} />
            <Route path ="/" element= {<HomePage />} />
            <Route path="/login" element= {<Unauthenticated> <Login /> </Unauthenticated> } />
            <Route path="/signup" element={<Unauthenticated> <Signup /> </Unauthenticated> } />
            <Route path = "savingGoal" element = {<SavingGoalPage/>} />
          </Routes>
     
      </div>
       
   );
 }
  

export default App;
