
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
