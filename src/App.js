
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Toast from './components/Toast';
import Update from './components/Update';


function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
