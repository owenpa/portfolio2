import Navbar from './Navbar.js';
import About from './About.js';
import Products from './Products.js';
import Certificates from './Certificates.js';
import Interests from './Interests.js';
import Testimonials from './Testimonials.js';

function App() {
  return (
    <>
      <Navbar />
      <div className='content-container'>
        <About />
        <Products />
        <Certificates />
        <Interests />
        {/* <Testimonials /> */}
      </div>
    </>
  );
}

export default App;
