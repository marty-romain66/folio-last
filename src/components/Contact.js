import React from 'react';

const Contact = () => {
    return (
    
            
// <div className="grid grid-cols-1 grid-rows-6 gap-4 h-screen bg-white absolute bottom-0 w-screen">
//         <div className="row-span-4 text-center font-title text-6xl pt-8">
//             <h4>Nous Contacter</h4>
//         </div>
//     <div className="row-span-2 row-start-5">4</div>
// </div>
    <div className="grid grid-cols-1 grid-rows-7 gap-4 bg-white absolute bottom-0 w-screen h-screen">
    <div className=' font-title text-6xl pt-8 text-center md:text-8xl' >
        <h4>Nous contacter </h4>
    </div>
    <div className="row-span-4">
        <div className='md:text-4xl border-solid border-2 border-black w-2/3 h-full m-auto text-center flex flex-col justify-center gap-12'>
            <p>Ecrivez nous un mail ! </p>
            <p>lrpm.sasu@gmail.com</p>
            <p>Ou applez nous !</p>
            <p>06.00.00.00</p>
        </div>
    </div>
    <div className="row-span-2 row-start-6 bg-black text-white text-center flex flex-col justify-center" >
        <p>Société Lrpm</p>
        <p>25 Avenue de la San Joan</p>
        <p>66300, Trouillas</p>
    </div>
</div>
   
    );
};

export default Contact;