'use client'
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link'
const About = () => {

  return (
    <section className='flex flex-col lg:flex-row justify-center items-center'>


        <motion.section
        initial={{width: "0%", opacity: 0, x: -1000}}
        animate={{width: '100%', opacity: 1, x: 0}}
        exit={{width: 0, opacity: 0}}
        transition={{duration: 1, ease: "easeInOut"}}
         className='flex-1 h-screen bg-black flex flex-col justify-center p-10 gap-6 items-center'>

          <h1 className='text-4xl font-bold text-white'>About Me</h1>
          <p className='text-white text-center'>I am a frontend Developer based in Sweden. I specialize in creating websites and applications that are both functional and visually appealing.</p>




        </motion.section>

        <section className='flex-1 flex flex-col justify-center gap-5 items-center'>

            <h2 className='text-4xl font-bold'>Got any questions?</h2>
          <Link href='/contact'>
            <button className='w-40 h-40 rounded-full bg-blue-700 border-2 border-white'>Contact Me!</button>
          </Link>

        </section>
    </section>
  )
}

export default About