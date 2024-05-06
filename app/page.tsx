'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {

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



  return (

    <section className="w-full flex justify-end items-center ">
      <ul className="w-full flex transition-all justify-end items-end perspective-800 pt-20 flex-col p-4">
      <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">CLIENT PORTFOLIO</li>
        <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">VALKOMPASSEN</li>
        <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">SOUNDBOOM</li>
        <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">BUDGETHERO</li>
        <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">RADYANT CANVAS</li>
        <li id="listitem" className="font-extrabold text-5xl md:text-7xl lg:text-10xl transform opacity-100 -rotate-y-12 hover:-rotate-y-6  transition-all cursor-pointer hover:text-transparent hover: text-black font-freeman">COOL PROJECT</li>
       
      </ul>

    </section>
  );
}
