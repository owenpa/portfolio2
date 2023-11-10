import resume from './assets/Owen Hill Resume.pdf'
function Navbar() {
  return (
    <div id='navbar-container'>
      <ul>
        <li><a className='navbar-link' href='#about-container'>ABOUT</a></li>
        <li><a className='navbar-link' href='#product-container'>PRODUCTS</a></li>
        <li><a className='navbar-link' href='#certificate-container'>CERTIFICATIONS</a></li>
        <li><a className='navbar-link' href='#interests-container'>INTERESTS</a></li>
        <button className="faSocialButton" onClick={() => { window.open('https://github.com/owenpa', '_blank') }}><i class="fa-brands fa-github"></i></button>
        <button className="faSocialButton" onClick={() => { window.open('https://linkedin.com/in/owenghill/', '_blank') }}><i class="fa-brands fa-linkedin"></i></button>
        <button className='resume-button' onClick={() => window.open('https://docs.google.com/document/d/1y8siLWwylxqYg4ZFt6g5Xq5KrVhmPg89xq_CSQ7XAfk/edit?usp=sharing', '_blank')}>RESUME</button>
      </ul>
    </div>
  )
}

export default Navbar;