import './App.css';
import Navbar from './Navbar'

import Home from './Pages/Home'
import Student from './Pages/Student'
import Pricing from './Pages/Pricing'


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/gelo-first-react-app/' element={<Home />} />
          <Route path='/Student' element={<Student />} />
          <Route path='/Pricing' element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
