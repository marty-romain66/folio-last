import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

const Layout = () => {
  useEffect(() => {
    gsap.fromTo(
      "#scale",
      {
        scale: "0.5",
        opacity: "0",
      },
      {
        duration: 0.8,
        delay: 0.8,
        scale: "1",
        opacity: "1",
      }
    );
  }, []);
  return (
    <section className="absolute h-screen w-screen grid grid-cols-1 grid-rows-5 gap-4">
      <div className="row-span-2">
        <h1 className="text font-title text-6xl m-16 md:text-9xl ">
          Agence <br /> La Capsule -
        </h1>
      </div>
      <div className="row-span-2 row-start-3">
        <h2 id="scale" className="text-4xl text-center md:text-4xl ">
          Faite un bond en avant
          <br /> dans le digital
        </h2>
      </div>
      <div className="row-start-5">
        {" "}
        <div className="flex justify-center items-center ">
          <ul className="flex gap-16 pb-56 md:text-3xl text-xl ">
            <li>
              <span>Nous Contacter?</span>
            </li>
            <li>
              <span>Nos Services</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Layout;
