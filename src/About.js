import portrait from './assets/me.jpeg'
function About() {
  return (
    <div id='about-container'>
      <img src={portrait} id='portrait' alt='A self portrait' />
      <h1>Hi! I'm Owen.</h1>
      <h2>Self-taught software engineer<br />
        creating efficient solutions for complex problems.</h2>
      <p>I'm a self-taught programmer who's been programming since I was 10 (2012), starting with 3D and 2D game development, transitioning to a more cybersecurity path with a focus on reverse engineering and exposing vulnerabilities within software, before making my way to fullstack app and web development.</p>
      <p>I'm looking to work with an engineering team who enjoys taking on challenges, creating useful products, and fosters an environment that promotes growth in both myself and others through mentorships or collaboration.</p>
    </div>
  )
}

export default About;