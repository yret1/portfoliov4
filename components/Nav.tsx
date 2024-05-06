'use client'
import Image from "next/image"
import { useEffect, useState } from "react"


import {AnimatePresence, motion} from "framer-motion"

const Nav = () => {

    


    const [smallScreen, setSmallScreen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)




    useEffect(() => {

      


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

    }, [])



    const handlemenutoggle = () => {
        setMenuOpen(!menuOpen)
    }





    if(!smallScreen) {
  return (
    <header className="hidden md:flex z-40 w-screen fixed bottom-0 left-0 justify-between px-10 py-4 items-end">
       

       <section className="flex flex-col">
        <section className="p-10">

       <Image src={"/icons/Logowhite.png"} width={50} height={50} className="md:w-28 md:h-28" alt="Logo" />
        </section>

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
            <section className="flex flex-col">

                <p className="flex items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">01</span>about</p>
                <p className="flex items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">02</span>journal</p>

            </section>
       </section>
       </section>


       <section className="flex flex-col justify-end items-center p-10" >

       <p className="flex items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">03</span>linkedin</p>
                <p className="flex items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">02</span>upwork</p> <p className="flex items-center justify-start text-[12px]  gap-2"><span className="font-thin text-[12px] text-opacity-50">01</span>contact</p>
       </section>
    </header>
  )
}

else {
    return (
        <header className="w-screen md:hidden fixed top-0 z-40 left-0 justify-between items-center flex">

            <section className="p-5 z-40">
                <Image src={"/icons/Logowhite.png"} width={50} height={50} alt="Logo" />
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

                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">01</span>about</p>
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">02</span>journal</p>
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">03</span>linkedin</p>
                <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">02</span>upwork</p> <p className="flex items-center justify-start text-lg  gap-2"><span className="font-thin text-[12px] text-opacity-50">01</span>contact</p>

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