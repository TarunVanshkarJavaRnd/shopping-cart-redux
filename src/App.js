import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/homepage/HomePage';
import CartPage from './pages/cartpage/CartPage';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cart' element={<CartPage />} ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
