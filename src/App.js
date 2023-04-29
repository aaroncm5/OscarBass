import {BrowserRouter, Routes, Route} from 'react-router-dom';import './App.css';
import Header from './components/header/Header';

import MainPage from './pages/mainPage/MainPage';


function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
