function Navbar() {
  return (
    <div id='navbar-container'>
      <ul>
        <li><a className='navbar-link' href='#about-container'>ABOUT</a></li>
        <li><a className='navbar-link' href='#product-container'>PRODUCTS</a></li>
        <li><a className='navbar-link' href='#certificate-container'>CERTIFICATIONS</a></li>
        <li><a className='navbar-link' href='#projects-container'>PROJECTS</a></li>
        <button className="faSocialButton" onClick={() => { window.open('https://github.com/owenpa', '_blank') }}><i className="fa-brands fa-github"></i></button>
        <button className="faSocialButton" onClick={() => { window.open('https://linkedin.com/in/owenghill/', '_blank') }}><i className="fa-brands fa-linkedin"></i></button>
        <button className='resume-button' onClick={() => window.open('https://docs.google.com/document/d/1lP_JKz0WwfsQNhqwqt4dNq4dEYDS9OVYiHiyFei9tLE/edit?usp=sharing', '_blank')}>RESUME</button>
        <button className="faSocialButton" onClick={() => {
          const root = document.querySelector(':root')
          const currentMode = getComputedStyle(root).getPropertyValue('color-scheme');
          root.style.setProperty('color-scheme', `${currentMode === 'dark' ? 'light' : 'dark'}`)
          }}><i class="fa-solid fa-sun"></i></button>
      </ul>
    </div>
  )
}

export default Navbar;