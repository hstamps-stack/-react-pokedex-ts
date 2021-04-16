import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import {BrowserRouter as Router} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <AppRouter/>
      </Router>
    </div>
  );
}

export default App;
