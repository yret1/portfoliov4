'use client'

import { useSelector } from "react-redux"

import {motion} from 'framer-motion'
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


  //Types för rendering av tekniker

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





    const animations = {
      initial:{opacity:0},
      animate:{opacity:1},
      exit:{opacity:0},
      transition:{duration:1, ease:"easeInOut"}
    }




 
  return (
   <section className="w-full min-h-screen pb-40 flex flex-col items-center justify-start">

    <motion.section
    initial={{opacity:0, height:0}}
    animate={{opacity:1, height:""}}
    transition={{duration:1, ease:"easeInOut"}}
    exit={{opacity:0, height:0}}
     className="w-full h-64 bg-black bg-cover bg-center lg:h-[800px]" style={{
      backgroundImage: `url(${project.images[0]})`,
    }}>


    </motion.section>



    <motion.section
    initial={{opacity:1}
    }
    animate={{opacity:1,
      transition: {
        staggerChildren: 0.4
      }
    }}
     className="grid w-screen p-10 md:grid-cols-3 gap-4">


      <motion.section
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      className="bg-black w-full lg:h-96 rounded-md flex justify-end items-center flex-col">

        <h1 className="font-bold text-4xl">The Project</h1>
        <Image src={"/icons/mission.svg"} width={300} height={300} alt="Project icon" />
      </motion.section>



      <motion.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="bg-black w-full md:col-span-2 lg:col-span-2 rounded-md  flex justify-center items-center">

        <h1 className="font-bold text-white md:text-3xl lg:text-6xl">{project.title}</h1>
      </motion.section>
      


      <motion.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="bg-black w-full h-full lg:h-96 flex md:col-span-2 lg:col-span-3 flex-col gap-4 justify-start rounded-md p-4 items-center">

        <h2 className="font-bold text-3xl">What Is {project.title} ?</h2>

       <section className="h-full justify-center items-center flex">

       <p className="text-center text-lg px-4">{project.description}</p>

       </section>




       


      </motion.section>

      <motion.section
      
      initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className="bg-black h-96 w-full lg:col-span-2 rounded-md  p-6 gap-5 flex flex-col justify-between items-center">
        <h3 className="text-center text-white font-bold text-3xl">How did it go?</h3>

        <p className="text-center text-lg text-white">{project.descriptiontwo}</p>



        <section className="w-full flex justify-center items-center">
          <a className="" href={project.link} referrerPolicy="no-referrer" target="_blank">
          <button className=" px-4 py-2 rounded-md text-black bg-white">Live Page</button>
          </a>

          {project.codelink !== "Private" && <button className=" px-4 py-2 rounded-md text-black bg-white">Code</button>}
        </section>
      </motion.section>


      <motion.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      
      className="w-full h-full bg-transparent rounded-md flex justify-center items-center">

        <NextProject />

      </motion.section>
      

    </motion.section>

   </section>
  )
}

export default Project