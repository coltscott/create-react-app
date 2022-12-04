import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages';
import Resume from './pages/resume';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
  	<Route path="/" element={<Navigate to="/index" />}/>
    <Route path='/resume' element={<Resume/>}/>
	</Routes>
	</Router>
);
}
export default App;
