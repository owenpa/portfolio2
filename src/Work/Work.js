import WorkEntry from "./WorkEntry";
import praeGallery from '../assets/prae.gif'

function Work () {
  return (
    <div className="max-w-[800px] flex flex-col gap-6">
      <WorkEntry
        imageSide='left'
        imageLink={praeGallery}
        productTitle='Prae Gallery'
        productDescription='Showcases the creator’s art, along with information about the piece, all accompanied by a user interface that allows uploading, editing, and deleting of the posts.
        Engineered a RESTful API with 8 endpoints that allow for analytics tracking of posts and purchases along with tracking user engagement through anonymous likes and sharing of published posts.'
        productLiveLink='https://prae-gallery.vercel.app'
        productGithub='https://github.com/owenpa/prae-gallery'
        techList='TypeScript, Tailwind CSS, SQL, Next.js, Vercel'
      />
      <WorkEntry
        imageSide='right'
        imageLink='https://camo.githubusercontent.com/1d655d91c87c46a0d68b09b28c995eb52772749addfbfde10a6b4d475df0bf66/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578596d4a69656e41796548647a636e45335957317a636a5668646a46314f484a79626d5675655745304d48497a64324a77626e70685a435a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f466a63734c4779786a314432445571466b6a2f67697068792e676966'
        productTitle='Brizo'
        productDescription='Built benchmarks for performance and resource utilization of K8s clusters through Grafana’s k6 tool.
        Implemented K8s security configuration tests through kube-bench.
        Enforced consistently productive end-of-day code review sessions and morning SCRUM meetings.
        '
        productLiveLink=''
        productGithub='https://github.com/oslabs-beta/Brizo'
        techList='React, TypeScript, Chart.js, Docker, K8s/Kubernetes, AWS'
      />
      <WorkEntry
        imageSide='left'
        imageLink='https://media.tractorsupply.com/is/image/TractorSupplyCompany/2019-tsc-store-front-social?$1200PNG$'
        productTitle='Tractor Supply Co'
        productDescription='Assisted the store in claiming the title of the #1 highest-grossing in the district. Set up numerous wireless printers for purchases made outside of the building.'
        productLiveLink=''
        productGithub=''
        techList=''
      />
      <WorkEntry
        imageSide='right'
        imageLink='https://imengine.public.prod.pdh.navigacloud.com/?uuid=AAFAFB3C-FFCE-427B-AF70-A139E40F57B5&type=preview&function=cover&height=609&width=800'
        productTitle='The Village at Victory Lakes'
        productDescription='Established several POS tablets for waiter usage, decreasing downtime spent waiting for the previous two POS, and increasing efficiency and table turnout rate.'
        productLiveLink=''
        productGithub=''
        techList=''
      />
    </div>
  )
}

export default Work;