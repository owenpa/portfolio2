import Home from './Home'
import About from './About/About'
import Work from './Work/Work'
import Navbar from "./Navbar";

import {HashRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <main className="text-2xl lg:text-lg h-screen flex flex-col items-center gap-8 bg-white dark:bg-[#2A2A28] dark:text-[#ECE6E4]">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
