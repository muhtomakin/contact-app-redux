import './App.css';
import Contacts from './components/Contacts';

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Contacts />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;