import Link from "next/link"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const NextProject = (title : any) => {


    const project = useSelector((state:any) => state.project.selected);

    const projects = useSelector((state:any) => state.project.projects);

    const dispatch = useDispatch();

    const [nextProjectTitle, setNextProjectTitle] = useState<string>("")

    useEffect(() => {


        const nextProject = () => {
  
          const currentIndex = projects.findIndex((proj:any) => proj.title === project.title)
  
  
  
          const nextIndex = currentIndex + 1
  
  
          console.log(nextIndex)
  
          if(nextIndex > projects.length - 1) {
            setNextProjectTitle(projects[0].title)
          }else {
            setNextProjectTitle(projects[nextIndex].title)
          }
  
        }
  
        nextProject()
  
      },[title])




    const handleCurrentProject = (title:string) => {
        dispatch({type : 'SET_SELECTED', payload : title})
      }
  return (
    <Link onClick={() => handleCurrentProject(nextProjectTitle)} href={`/projects/${nextProjectTitle}`}>
    <button className="h-40 w-40 rounded-full bg-black text-white justify-center items-center flex">
      Next Project <br />{nextProjectTitle}</button>
    </Link>
  )
}

export default NextProject