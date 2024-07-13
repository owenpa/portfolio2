import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

function Navbar() {
  const [theme, setTheme] = useState('light')
  function handleTheme() {
    function enableDarkMode() {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme('dark')
    }
    function disableDarkMode() {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme('light')
    }
    
    localStorage.theme == 'dark' ? disableDarkMode() : enableDarkMode()
  }

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  return (
    <div className='flex gap-8 p-8'>
      <Link to='/about' className='p-2'>About</Link>
      <p className='p-2'> | </p>
      <Link to='/' className='p-2'>Home</Link>
      <p className='p-2'> | </p>
      <Link to='/work' className='p-2'>Work</Link>
      <p className='p-2'> | </p>
      {theme == 'dark' ?
        <button onClick={handleTheme}><Moon color='#ffffff' /></button>
          :
        <button onClick={handleTheme}><Sun /></button> 
      }
    </div>
  )
}

export default Navbar;