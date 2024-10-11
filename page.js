"use client";
import Image from "next/image";
import "./globals.css";
import { useEffect } from "react";
import { initializeRDMEffect } from "./effects/rdm.js";
import { applyRDMEffect } from "./effects/rdm.js";

export default function MyComponent() {
  useEffect(() => {
    initializeRDMEffect(); // Applique l'effet aléatoire après le rendu du composant
  }, []);
  
  return (

    <div className="page1">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        
    <div className="Container bg-black text-white min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8">
      <section className="Welcome-page flex-grow flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center pt-8 sm:pt-12">
          <h1 id="visionTitle" className="text-3xl sm:text-4xl md:text-4xl font-bold text-white font-akkurat-mono">Vision.</h1>
        </div>

        <nav className="flex justify-center items-center py-8 sm:py-12">
          <ul className="flex flex-col text-center text-xl sm:text-2xl gap-2 sm:gap-2">
            <li><a href="#" className="hover:text-gray-300 transition-colors"><span>About</span></a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors"><span>Team</span></a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors"><span>Projects</span></a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors"><span>Contact</span></a></li>
          </ul>
        </nav>

        <div className="w-full pb-4 sm:pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-0 px-4 sm:px-8 md:px-12 lg:px-16">
            <p className="text-xs sm:text-sm text-center sm:text-center">Vision, <br /> Front-End/Back-end <br /> Development</p>
            <p className="text-xs sm:text-sm text-center">Let's Work<br /> Together <br />:)</p>
            <p className="text-xs sm:text-sm text-center sm:text-center">Boulogne-Sur-Mer <br />62, Nord-Pas-De-Calais, <br />France</p>
          </div>
        </div>
      </section>

      </div>

      <section className="Project-page bg-red-600 h-screen ">


      </section>
      <section className="Project-page bg-black h-screen font-akkurat-mono relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-center text-[100px]">Meet us.</h1>
        </div> 
      </section>
      <section className="Project-page bg-red-600 h-screen ">
        <div className="flex flex-col pt-8 sm:pt-12">
          <h1 className="text-white px-20 text-[100px]">Contact us.</h1>
        </div> 
      </section>
    </div>
  );
}