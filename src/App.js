import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/pizza' element={<div>PIZZA page</div>}/>
          <Route path='/cart' element={<div>CART page</div>}/>
          <Route path='*' element={<Navigate to='/pizza'/>}/>
      </Routes>
    </div>
  );
}

export default App;
