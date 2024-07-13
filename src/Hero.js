import { Github, Linkedin, Mail } from 'lucide-react'
import portrait from './assets/me.jpeg'

function Hero() {

  return (
      <div className="flex w-[800px]">
        <img className="max-w-52 max-h-52 rounded-md"  src={portrait} />
        <div className="mt-8 ml-8">
          <div className="flex justify-between">
            <h1 className="text-4xl mb-2">Owen Hill</h1>
            <div className='flex gap-2'>
              <a href='https://github.com/owenpa' target='_blank' className='p-2'><Github className='hover:stroke-blue-700 dark:hover:stroke-[#4C7F56] fill-neutral-700 lg:fill-transparent scale-150 lg:scale-100' /></a>
              <a href='https://www.linkedin.com/in/owenghill/' target='_blank' className='p-2'><Linkedin className='hover:stroke-blue-700 dark:hover:stroke-[#4C7F56] fill-neutral-700 lg:fill-transparent scale-150 lg:scale-100' /></a>
              <a href='mailto:owenghill@outlook.com' target='_blank' className='p-2'><Mail className='hover:stroke-blue-700 dark:hover:stroke-[#4C7F56] fill-neutral-700 lg:fill-transparent scale-150 lg:scale-100' /></a>
            </div>
          </div>
          <h2 className="text-3xl">Full Stack Software Engineer</h2>
          <h3 className="text-2xl pb-6">Self-taught developer looking for opportunities to 
            create or be a part of a product that changes landscapes.</h3>
            <button onClick={() => { window.open('mailto:owenghill@outlook.com',  '_blank')}} className="bg-blue-500 hover:bg-blue-700 dark:bg-[#60A16D] dark:hover:bg-[#4C7F56] text-white font-bold py-2 px-4 rounded mr-4">Get in touch</button>
            <button onClick={() => { window.open('https://docs.google.com/document/d/1lP_JKz0WwfsQNhqwqt4dNq4dEYDS9OVYiHiyFei9tLE/edit?usp=sharing',  '_blank')}} className="bg-blue-500 hover:bg-blue-700 dark:bg-[#60A16D] dark:hover:bg-[#4C7F56] text-white font-bold py-2 px-4 rounded">View Resume</button>
        </div>
      </div>
  )
}

export default Hero;