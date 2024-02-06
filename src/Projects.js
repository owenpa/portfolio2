import isell from './assets/isell.png';
import limultitool from './assets/li-multitool.png';

/*
      <div className="projects-box">
        <a href={} target="_blank" rel="noreferrer"><img src={} alt="" /></a>
        <div className="projects-description">
          <h2>Project Title</h2>
          <p>One line description.</p>
          <p>
            <a href='' target="_blank" rel="noreferrer">website</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='' target="_blank" rel="noreferrer">github</a>
          </p>
        </div>
      </div>
*/

function Projects() {
  return (
    <div id="projects-container">
      <div className="projects-box">
        <a href={isell} target="_blank" rel="noreferrer"><img src={isell} alt="still of the isell website" /></a>
        <div className="projects-description">
          <h2>iSell Demo</h2>
          <p>A landing page demo with a focus towards selling an application for your phone.</p>
          <p>
            <a href='https://isell-site.vercel.app/' target="_blank" rel="noreferrer">live demo</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='https://github.com/owenpa/isell-site' target="_blank" rel="noreferrer">github</a>
          </p>
        </div>
      </div>
      <div className="projects-box">
        <a href={limultitool} target="_blank" rel="noreferrer"><img src={limultitool} alt="" /></a>
        <div className="projects-description">
          <h2>li-multitool</h2>
          <p>A chrome extension that adds useful features to LinkedIn for increased user experience.</p>
          <p>
            <a href='https://chromewebstore.google.com/detail/linkedin-multitool/ldbapangjlpdmkmmjbiagdlpbcpkghji?hl=en' target="_blank" rel="noreferrer">webstore link</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href='https://github.com/owenpa/li-multitool' target="_blank" rel="noreferrer">github</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects;