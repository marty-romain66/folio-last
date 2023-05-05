import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";
import Bananas from "@/components/Bananas";
import Layout from "@/components/Layout";
import Page2 from "@/components/Page2";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

const [speed, setSpeed] = useState(1);
const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger); // enregistrez ScrollTrigger pour l'utiliser avec GSAP

useEffect(() => {
// Définissez votre animation GSAP ici
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".r", // Sélectionnez l'élément qui déclenchera l'animation
    start: "top top", // Démarrez l'animation lorsque le haut de l'élément est en haut de la fenêtre
    endTrigger: ".r", // Sélectionnez l'élément qui terminera l'animation
    end: "bottom top", // Terminez l'animation lorsque le haut de l'élément est en haut de la fenêtre
    scrub: true, // Permet à l'animation de se mettre à jour en temps réel lors du défilement
    onUpdate: (self) => {
      // Mettez à jour la valeur de speed en fonction du défilement
      const maxSpeed = 70; // Valeur maximale pour speed
      const scrollProgress = self.progress; // Progression de défilement actuelle (entre 0 et 1)
      const newSpeed = Math.ceil(scrollProgress * maxSpeed); // Calculez la nouvelle valeur de speed
      setSpeed(newSpeed); // Mettez à jour la valeur de speed dans votre état (utilisez useState)
     
    },
   
  },
});

// Ajoutez les animations souhaitées à votre timeline GSAP
timeline.to("#Bananas", { speed: speed });

// Nettoyez l'animation lorsque le composant est démonté
return () => {
  timeline.kill();
};
}, []); // Assurez-vous de fournir un tableau de dépendances vide pour exécuter le useEffect une seule fois
useEffect(()=>{
  gsap.fromTo("#page2",{
    y : '100%'
  },
  {
    y : "0",
    scrollTrigger: {
      trigger: ".r", // Sélectionnez l'élément qui déclenchera l'animation
      start: "top top", // Démarrez l'animation lorsque le haut de l'élément est en haut de la fenêtre
      endTrigger: ".r", // Sélectionnez l'élément qui terminera l'animation
      end: "bottom top", // Terminez l'animation lorsque le haut de l'élément est en haut de la fenêtre
      scrub: true, // Permet à l'animation de se mettre à jour en temps réel lors du défilement
  }
    
    
  })
},[])
return (
  
  <>
  <main className="relative h-h300">
  <div className="r relative w-screen h-h200">
    <div className="fixed">
      <Layout />
      <Suspense>
        <div className="h-screen w-screen absolute -z-10 " id="Bananas">
          <Bananas ref={ref} speed={speed} cameras={1} />
        </div>
      </Suspense>
    </div>
    <section id="page2" className='h-screen w-screen absolute bottom-0 z-10 bg-slate-100'>
      <Page2 />
    </section>
  </div><Contact />
  </main></>
);
}