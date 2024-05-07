'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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

        {projects.map((project : any, index : number) => (

          <Link onClick={() => handleCurrentProject(project.title)} href={`/projects/${project.title}`} key={index}>
              <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform-style-3d transform opacity-100 -rotate-y-[20deg] hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">{project.title.toUpperCase()}</li>
          </Link>

        ))}
      </ul>

    </section>
  );
}
