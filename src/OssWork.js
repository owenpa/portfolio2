import { useEffect, useState } from "react";
import OssWorkBox from './OssWorkBox'
function OssWork () {
  let [ghRepoList, setGhRepoList] = useState('')

  async function fetchRepoList () {
    const response = await fetch('https://api.github.com/users/owenpa/repos')
    setGhRepoList(await response.json())
  }

  useEffect(() => {
    try {
      fetchRepoList()
    } catch (err) {
      console.log(err)
    }
  }, [])

  function listToBoxes (list) {
    const divAsArrays = new Array(Math.floor(list.length/3) + 1).fill(null).map(() => Array(0))
    const divAsObj = Object.assign({}, divAsArrays)
    if (!list.length) return
    list = list.sort((a, b) => new Date(b['updated_at']) - new Date(a['updated_at']))
    console.log(list)
    list.map((repo, index) => {
      divAsObj[`${Math.floor(index/3)}`].push(<OssWorkBox
        key={index}
        name={repo['name']}
        full_name={repo['full_name']}
        html_url={repo['html_url']}
        description={repo['description']}
        stargazers_count={repo['stargazers_count']}
        watchers_count={repo['watchers_count']}
        created_at={repo['created_at']}
        updated_at={repo['updated_at']}
      />)
    })
    const boxesWithDiv = Object.values(divAsObj).map((groupedBoxes, idx) => 
    <div 
      className="lg:flex py-3"
      key={idx}>{groupedBoxes}
    </div>)
    return boxesWithDiv
  }
  
  return (
    <div className="max-w-[900px]">
      <h2 className="text-3xl pb-2">Side Projects / Open Source</h2>
      <div className="">
        {listToBoxes(ghRepoList)}
      </div>
    </div>
  )
}

export default OssWork;