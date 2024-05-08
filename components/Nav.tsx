'use client'
import Image from "next/image"
import { useEffect, useState } from "react"


import {AnimatePresence, motion} from "framer-motion"

import { usePathname} from "next/navigation"
import Link from "next/link"

const Nav = () => {



    /**
     * Navbar renderas i root layout. Navbaren har 2 verisoner, en för desktop och en för touchscreens.
     *
     * Mobilversionen har en meny som öppnas och stängs med en knapp medans desktopversionen har en fast navbar med mer avancerade animationer.
     */


    const current = usePathname();





    


    const [smallScreen, setSmallScreen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const [scroll, setScroll] = useState(false)


    const [projectview, setProjectView] = useState(false)



    useEffect(() => {


        if(current === "/") {
            setProjectView(false)
        }else {
            setProjectView(true)
        }
      


        if(window.innerWidth < 768) {
            setSmallScreen(true)
        }
        else {
            setSmallScreen(false)
        }

        window.addEventListener("resize", () => {
            if(window.innerWidth < 768) {
                setSmallScreen(true)
            }
            else {
                setSmallScreen(false)
            }
        })



        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [current, projectview])



    const handleScroll = () => {
        const scroll = window.scrollY


        if(scroll >= 300) {
            setScroll(true)
        }else{
            setScroll(false)
        }
    }




    const handlemenutoggle = () => {
        setMenuOpen(!menuOpen)
    }








    if(!smallScreen) {
  return (
    <>

<motion.section
    initial={{top: projectview ? "2vh" : "75vh",
        opacity: 1
    }}
    animate={{top: projectview ? "2vh" : "75vh",
    opacity: 1
    }}
    exit={{top: projectview ? "2vh" : "75vh",
    opacity: 1
    }}
    transition={{duration: 1, ease: "easeInOut"}}
id="logo"
 className={`p-10 transition-all fixed`}>

<Link href="/">
<Image src={"/icons/Logowhite.svg"} width={50} height={50} className={`md:w-28 md:h-28 transition-opacity duration-200  ${scroll ? "opacity-35" : "opacity-100"}`} alt="Logo" />
</Link>

 </motion.section>

 <motion.section
  initial={{top: projectview ? "10vh" : "91.5vh"}}
  animate={{top: projectview ? "10vh" : "91.5vh"}}
  exit={{top: projectview ? "10vh" : "91.5vh"}}
  transition={{duration: 1.2, ease: "easeInOut"}}
  id="linksone" className={`flex flex-col fixed left-96 transition-opacity z-50 duration-200  ${scroll ? "opacity-35" : "opacity-100"}`}>

<Link href={"/about"}>
<p className="flex items-center justify-start text-[12px] hover:scale-110   gap-2"><span className="font-thin text-[12px] z-50 text-opacity-50">01</span>about</p>
</Link>
<Link href={"/journal"}>
<p className="flex items-center justify-start text-[12px] hover:scale-110   gap-2"><span className="font-thin text-[12px] z-50 text-opacity-50">02</span>journal</p>
</Link>

</motion.section>
    
    <header className={`hidden md:flex transition-all z-40 w-screen fixed bottom-0 left-0 justify-between px-10 py-4 items-end`}>

       <section className="flex flex-col">
       

       <section className="flex justify-start gap-6 p-10">
            <section className="flex flex-col items-start justify-center">
                <p className="font-thin text-[12px] ">
                Simon Gustavsson <br />
                Frontend Developer
                </p>
            </section>
            <section className="flex flex-col items-start justify-center">

                <p className="font-thin text-[12px] ">Malmö Sweden</p>
                <p className="text-[10px]  font-semibold">gustavssondev@gmail.com</p>


            </section>
           
       </section>
       </section>


       <section className="flex flex-col justify-end items-center p-10" >

        <Link href={"/contact"}>
       <p className="flex hover:scale-110 items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">03</span>contact</p>
        </Link>

    <a href="https://www.upwork.com/freelancers/~016509dc8b3fcee662?mp_source=share" referrerPolicy="no-referrer" target="_blank">
                <p className="flex hover:scale-110  items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">04</span>upwork</p> 
    </a>
    <a href="" referrerPolicy="no-referrer" target="_blank">
       <p className="flex items-center hover:scale-110  justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">05</span>linkedin</p>
    </a>
       </section>
    </header>
    </>
  )
}

else {
    return (
        <header className="w-screen md:hidden fixed top-0 z-40 left-0 justify-between items-center flex">

            <section className="p-5 z-40">
                <Link href="/">

                <Image src={"/icons/Logowhite.png"} width={50} height={50} alt="Logo" />
                </Link>
            </section>
            <section className="p-5 z-40">
                <button className="w-full h-full flex justify-center items-center flex-col gap-2" onClick={() => setMenuOpen(!menuOpen)}>
                
                <span id="arrow" className={`h-1 w-8 rounded-full bg-white transform ${menuOpen ? "-rotate-z-[22deg]" : ""} transition-all`}></span>
                <span id="arrow" className={`h-1 w-8 rounded-full bg-white transform ${menuOpen ? "opacity-0" : "opacity-100"} transition-all`}></span>
                <span id="arrow" className={`h-1 w-8 rounded-full bg-white transform ${menuOpen ? "rotate-z-[22deg]" : ""} transition-all`}></span>
                </button>
            </section>


            <AnimatePresence>

                    {menuOpen && (
                        <motion.section
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                         className="absolute z-0 w-screen min-h-screen top-0 left-0 bg-primary-100 bg-opacity-40 flex flex-col pt-20">

                            
                           
       <section className="flex flex-col justify-start gap-6 p-10">
            <section className="flex flex-col items-start justify-center">
                <p className="font-medium text-lg ">
                Simon Gustavsson <br />
                Frontend Developer
                </p>
            </section>
            <section className="flex flex-col items-start justify-center">

                <p className="font-medium text-lg ">Malmö Sweden</p>
                <p className="text-lg  font-semibold">gustavssondev@gmail.com</p>


            </section>
            <section className="flex flex-col">

                        <Link href={"/about"}>
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">01</span>About</p>
                </Link>
                <Link href={"/journal"}>
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">02</span>Journal</p>
                </Link>

                <a href="" referrerPolicy="no-referrer" target="_blank"> 
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">03</span>Contact</p>
                </a>

                <a href="" referrerPolicy="no-referrer" target="_blank">
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">04</span>Linkedin</p>
                </a>
                <a href="https://www.upwork.com/freelancers/~016509dc8b3fcee662?mp_source=share" referrerPolicy="no-referrer" target="_blank">
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">05</span>Upwork</p>
                </a>
                

            </section>
       </section>

                        <footer className="fixed bottom-0 w-full flex justify-center items-center p-4">
                            <p className="text-center text-opacity-20 text-lg font-thin">© 2024 Simon Gustavsson</p>
                        </footer>


                        </motion.section>
                    )}

                </AnimatePresence>
        </header>
    )
}
}

export default Nav