import { Star, Eye } from 'lucide-react'

function OssWorkBox (props) {
  const {name, full_name, html_url, description, stargazers_count, watchers_count, created_at, updated_at} = props

  return (
    <div className="w-svw mb-6 lg:mb-0 lg:w-[32%] mx-[1%] float-left outline outline-1 outline-offset-4 bg-[#fcfcfc] outline-neutral-200 hover:bg-[#f9f9f9] dark:bg-[#2A2A28] dark:hover:bg-[#2E2E2B] dark:outline-neutral-600 rounded-sm">
      <div className="flex h-[100%] flex-col">
        <h4 className="font-semibold">{name}</h4>
        <a href={html_url} target="_blank" className="w-fi hover:text-blue-400">{full_name}</a>
        <p>{description}</p>
        <div className="mt-auto">
          <p className="inline"><Star className='inline fill-yellow-300 stroke-yellow-300' /> {stargazers_count} </p>
          <p className="inline"><Eye className='inline fill-neutral-200 stroke-neutral-700' size={20} /> {watchers_count} </p>
          <p className="text-slate-500 dark:text-slate-300 font-medium">Updated: {updated_at.split('T')[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default OssWorkBox