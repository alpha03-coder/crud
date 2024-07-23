
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Toast from './components/Toast';


function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
