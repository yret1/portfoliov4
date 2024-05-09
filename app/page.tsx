'use client'
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {


  const dispatch = useDispatch();


  const projects = useSelector((state : any) => state.project.projects);




  useEffect(() => {
    fetch("/api/connectDB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data : any) => {
        dispatch({type : 'GET_PROJECTS', payload : data.projects})
    })
  },[])




const handleCurrentProject = (title:string) => {
  dispatch({type : 'SET_SELECTED', payload : title})
}



  return (

    <section className="w-full flex justify-end items-center ">
      <ul className="w-full flex transition-all justify-end items-end perspective-1000 pt-20 flex-col p-4">



        <AnimatePresence>

        {projects.map((project : any, index : number) => (

          <Link onClick={() => handleCurrentProject(project.title)} href={`/projects/${project.title}`} key={index}>
              <motion.li
              initial={{opacity:0, y: 1000, rotateY: 30}}

              animate={{opacity:1, y: 0, rotateY: 20}}
              transition={{duration:0.2, delay:0.15 * index, ease: "circInOut"}}
               id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transition-all cursor-pointer hover:text-transparent text-black font-freeman">{project.title.toUpperCase()}</motion.li>
          </Link>

        ))}

      </AnimatePresence>
      </ul>

    </section>
  );
}
