

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button } from "teleios-ui";

import Home from './pages/home';
import About from './pages/about';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Button />
    </>
  )
}

export default App;
