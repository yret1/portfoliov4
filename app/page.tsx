'use client'
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {


  const dispatch = useDispatch();


  const projects = useSelector((state : any) => state.project.projects);


 

useEffect(() => {

  gsap.fromTo(
    "#listitem", // CSS selector for the elements to animate
    {
      opacity: 0,
      y: 100,
      rotateY: 12, // Initial rotation
    },
    {
      opacity: 1,
      y: 0,
      rotateY: 0, // Final rotation
      duration: 1,
      stagger: 0.1,
      ease: "power2.out", // Easing function
    }
  );
})





const handleCurrentProject = (title:string) => {
  dispatch({type : 'SET_SELECTED', payload : title})
}



  return (

    <section className="w-full flex justify-end items-center ">
      <ul className="w-full flex transition-all justify-end items-end perspective-800 pt-20 flex-col p-4">

        {projects.map((project : any, index : number) => (

          <Link onClick={() => handleCurrentProject(project.title)} href={`/projects/${project.title}`} key={index}>
              <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">{project.title.toUpperCase()}</li>
          </Link>

        ))}
      </ul>

    </section>
  );
}
