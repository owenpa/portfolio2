import FeaturedWorkCollapsible from "./FeaturedWorkCollapsible";
import praeGallery from './assets/prae.gif'
import studyWithMe from './assets/studywithme.gif'
import trendy from './assets/trendy.gif'
function FeaturedWork() {
  return (
    <div className="w-[800px]">
      <h2 className="text-3xl pb-2">Featured Work</h2>
      <span className="flex justify-between px-2 pb-2 border-b-2 border-solid border-neutral-500 font-semibold">
        <p>project</p>
        <p>tags</p>
      </span>
      <div>
        <FeaturedWorkCollapsible
          projectName='Prae Gallery'
          projectTags={['freelance', 'web app', 'nextjs']}
          imageLink={praeGallery}
          projectDetails={{
            githubLink: 'https://github.com/owenpa/prae-gallery',
            liveLink: 'https://prae-gallery.vercel.app/',
            description: 'An artist\'s gallery with a dashboard that allows analytics viewing, uploading, editing, and deleting of the posts.',
            techList: 'typescript, nextjs, bcrypt, tailwindcss, zod'
          }}
        />
        <FeaturedWorkCollapsible
          projectName='Brizo'
          projectTags={['devtool', 'aws', 'kubernetes']}
          imageLink={'https://camo.githubusercontent.com/1d655d91c87c46a0d68b09b28c995eb52772749addfbfde10a6b4d475df0bf66/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578596d4a69656e41796548647a636e45335957317a636a5668646a46314f484a79626d5675655745304d48497a64324a77626e70685a435a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f466a63734c4779786a314432445571466b6a2f67697068792e676966'}
          projectDetails={{
            githubLink: 'https://github.com/oslabs-beta/Brizo',
            liveLink: '',
            description: 'A development tool focused around enabling streamlined Kubernetes cluster metrics and maintenance. Monitor cluster health, performance, and perform CIS standard security checks.',
            techList: 'typescript, reactjs, expressjs, aws, docker, k8s' 
          }}
        />
        <FeaturedWorkCollapsible
          projectName='Study With Me'
          projectTags={['website', 'reactjs']}
          imageLink={studyWithMe}
          projectDetails={{
            githubLink: 'https://github.com/PFA-Crew/Study-With-Me',
            liveLink: '',
            description: 'A single page application which provides users with common modules to help with studying, focusing, ensuring proper break practices, and note taking.',
            techList: 'javascript, reactjs, expressjs, mongodb' 
          }}
        />
        <FeaturedWorkCollapsible
          projectName='Trendy'
          projectTags={['website', 'reactjs', 'ai']}
          imageLink={trendy}
          projectDetails={{
            githubLink: 'https://github.com/stabbit/trendy',
            liveLink: '',
            description: 'A website that receives a location and returns all activities (food, monuments, parks, etc) and reviews before then analyzing the sentiment of recent reviews and sorting the results.',
            techList: 'postgresql, reactjs, expressjs, javascript' 
          }}
        />
      </div>
    </div>
  )
}

export default FeaturedWork;