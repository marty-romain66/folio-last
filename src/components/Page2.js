import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap/dist/gsap";
import { Model } from "./1";
import Pc from "./Pc";
import Contact from "./Contact";
const Page2 = () => {
  useEffect(() => {
    gsap.fromTo(
      "h3",
      {
        opacity: "0",
        scale: 0.5,
      },
      {
        stagger: 0.3,
        scale: 1,
        ease: "power2",
        opacity: 1,
        scrollTrigger : {
            trigger : "#end",
            start: "top 50%", // Démarrez l'animation lorsque le haut de l'élément est en haut de la fenêtre
            endTrigger: ".r", // Sélectionnez l'élément qui terminera l'animation
            end: "bottom top", // Terminez l'animation lorsque le haut de l'élément est en haut de la fenêtre
            
        }
      }
    );
  }, []);
  
  return (
    <>
     
<div className="grid grid-cols-1 grid-rows-6 gap-4 absolute h-screen -z-10 w-screen right-0 top-0">
    <div className="row-span-1 font-title text-6xl text-center mt-12 md:text-8xl">
      <h2>Agence la Capsule</h2>
    </div>
    <div className="row-span-5 row-start-2 h-full pb-12 pr-4 pl-4 "id="end">
    <div className=" flex  flex-col justify-around text-center text-xl h-full md:text-4xl">
          <h3>Vous avez besoin</h3>
          <h3 id="reaval1">D'un site web pour votre buisness?</h3>
          <h3 id="reaval2">
            De photos et vidéos, pour vos produits ou locaux?
          </h3>
          <h3 id="reaval1">D'être bien placé dans les moteurs de recherche?</h3>
          <h3 id="reaval2">
            En gros vous avez besoins de vous démarqué de la conccurence
          </h3>
          <h3 id="reaval2">On en discute autour d'un café?</h3>
        </div>
    </div>
</div>

    </>
  );
};

export default Page2;
