import React from "react";
import Navbar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home.pages';
import SavingGoal from "./pages/savingGoal";
import Login from "./pages/login";
import { Authenticated, Unauthenticated } from "./components/authenticated";
import Signup from "./pages/signup";
import UserDashboard from "./pages/userDashboard";
import ExpensePage from "./pages/expense"
import Profile from "./pages/profile";


const App = () => {
 
  return (
      <div className="App">
      <Navbar />
      <Routes>
            <Route path="/expense" element = { <ExpensePage /> } />
            <Route path ="/" element= {<HomePage />} />
            <Route path="/login" element= {<Unauthenticated> <Login /> </Unauthenticated> } />
            <Route path="/profile" element= {<Profile />} />
            <Route path="/signup" element={<Unauthenticated> <Signup /> </Unauthenticated> } />
            <Route path = "/savingGoal" element = { <SavingGoal/>} />
            <Route path="/userDashboard" element = { <Authenticated> <UserDashboard /> </Authenticated>}/>
            
          </Routes>
     
      </div>
       
   );
 }
  

export default App;

