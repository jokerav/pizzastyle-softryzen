import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./components/appBar";
import ProductsList from './components/ProductsList'
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
      <Routes>
          <Route path='/pizza' element={<ProductsList/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='*' element={<Navigate to='/pizza'/>}/>
      </Routes>
    </div>
  );
}

export default App;
