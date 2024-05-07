'use client'

import { useSelector } from "react-redux"
const Project = () => {



    const project = useSelector((state:any) => state.project.selected)


    console.log(project)
  return (
    <div>

        <h1>{project.title}</h1>

    </div>
  )
}

export default Project