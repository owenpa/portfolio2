import portrait from './assets/me.jpeg'
function About() {
  return (
    <div id='about-container'>
      <img src={portrait} id='portrait' alt='A self portrait' />
      <h1>Hi! I'm Owen.</h1>
      <h2>Self-taught software engineer<br />
        creating efficient solutions for complex problems.</h2>
      <p>I'm a self-taught programmer and I've been programming since 2015, starting with 3D and 2D game development, transitioning to a more cybersecurity path with a focus on reverse engineering and exposing vulnerabilities within software, before making my way to fullstack app and web development.</p>
    </div>
  )
}

export default About;