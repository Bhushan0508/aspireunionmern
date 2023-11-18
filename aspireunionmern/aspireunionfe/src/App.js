import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/ExerciseList.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Routes>
          <Route path="/" exact element={<ExerciseList/>}/>
        
          <Route path="/edit/:id"  element={<EditExercise/>}/>
        
          <Route path="/create"  element={<CreateExercise/>}/>
        
          <Route path="/user"  element={<CreateUser/>}/>
        </Routes>
        </div>
    </Router>
  );
} 

export default App;
