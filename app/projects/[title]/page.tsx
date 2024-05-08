'use client'

import { useSelector } from "react-redux"

import {AnimatePresence, motion} from 'framer-motion'
import NextProject from "@/components/NextProject"
import Image from "next/image"


const Project = () => {



  /**
   * Denna sida är dynamisk. Data hämtas från redux store och visas beroende på vilket projekt som är valt.
   * Animationer sköts med framer-motion och gsap.
   * 
   * Nästa projekt räknas ut genom att jämföra det aktiva projektets index med alla projekt i store.
   * 
   * 
   * 
   */


  //Types för rendering av teknikere

  type Tech = 'React' | 'Next' | 'MongoDB' | 'Node' | 'TailwindCSS' | 'Redux' | 'TypeScript' ;



  //Statisk data för bilder
  const images : Record<Tech, string>  = {
    React : "/icons/React.svg",
    Next : "/icons/Next.svg",
    MongoDB : "/icons/MongoDB.svg",
    Node : "/icons/Node.svg",
    TailwindCSS : "/icons/Tailwind.svg",
    Redux : "/icons/Redux.svg",
    TypeScript : "/icons/Typescript.svg"

  }

  //Hämta aktivt projekt från store
    const project = useSelector((state:any) => state.project.selected)








 
  return (
   <section className="w-full min-h-screen pb-40">


    <AnimatePresence>
  

    <motion.section
    initial={{opacity:0, height:0}}
    animate={{opacity:1, height:""}}
    transition={{duration:1, ease:"easeInOut"}}
     className="w-full h-64 bg-black md:h-96 bg-cover bg-center lg:h-[800px]" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    }}>


    </motion.section>

    <section className="w-full flex items-center justify-center p-10 gap-5 flex-col">


      <motion.h1
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      exit={{y:100, opacity:0}}
      transition={{duration:1, ease:"easeInOut", delay:0.5}}
      
       id="textshow" className=" text-white lg:hidden font-bold text-3xl p-4 text-center">{project.title}</motion.h1>



      <section className="flex flex-1 flex-col gap-5 lg:flex-row">

      <section className="flex flex-col justify-center items-center">

 
        <motion.h1 
          initial={{y:100, opacity:0}}
          animate={{y:0, opacity:1}}
          exit={{y:100, opacity:0}}
          transition={{duration:1, ease:"easeInOut", delay:0.5}} id="textshow" className="hidden lg:block text-white font-bold text-6xl p-4">{project.title}</motion.h1>

    <motion.p
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      exit={{y:100, opacity:0}}
      transition={{duration:1, ease:"easeInOut", delay:0.5}} id="textshow" className="text-center">{project.description}</motion.p>
    </section>

    <motion.section

    initial={{x:100, opacity:0}}
    animate={{x:0, opacity:1}}
    exit={{x:100, opacity:0}}
    transition={{duration:1, ease:"easeInOut", delay:0.5}}
     className="w-full flex-1 flex justify-center items-center flex-col gap-4 md:flex-row">


<section className="bg-center bg-cover w-full h-60 rounded-md md:h-96 lg:w-96" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    }}></section>

      <section className="bg-center hidden lg:block bg-cover w-full h-60 rounded-md md:h-96 lg:w-96" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    }}></section>


</motion.section>







      </section>

  



</section>


    


<section className="flex justify-center  items-center flex-col-reverse gap-5 lg:flex-row p-10">

 <motion.section 
  initial={{x:-100, opacity:0}}
  animate={{x:0, opacity:1}}
  exit={{x:-100, opacity:0}}
  transition={{duration:1, ease:"easeInOut", delay:0.5}}
  className="w-full flex flex-col lg:flex-row gap-4">
 <section className="bg-center bg-cover w-full h-60 rounded-md md:h-96 lg:w-96" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    }}></section>

      <section className="bg-center hidden lg:block bg-cover w-full h-60 rounded-md md:h-96 lg:w-96" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    }}></section>

 </motion.section>

<section className="w-full flex flex-col items-center gap-6 justify-center">
<motion.p 
 initial={{y:100, opacity:0}}
 animate={{y:0, opacity:1}}
 exit={{y:100, opacity:0}}
 transition={{duration:1, ease:"easeInOut", delay:0.5}}
className="text-center">{project.descriptiontwo}</motion.p>





<section className="flex flex-col justify-center items-center">
<motion.p
 initial={{y:100, opacity:0}}
 animate={{y:0, opacity:1}}
 exit={{y:100, opacity:0}}
 transition={{duration:1, ease:"easeInOut", delay:0.5}}
className="font-bold text-white">Projektet byggdes med:</motion.p>

<motion.section
 initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
 className="grid grid-cols-3 gap-5 place-items-center p-4">
      {project.technologies && project.technologies.map((tech: Tech, index:number) => (
        <Image key={tech} src={images[tech]} alt={tech} width={40} height={40} />
      ))}
    </motion.section>
</section>
</section>

      </section>



      <section className="flex justify-center ite">



      <NextProject title={project.title} />
      </section>
      </AnimatePresence>
   </section>
  )
}

export default Project