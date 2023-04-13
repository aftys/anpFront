import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { listPort } from '../data';
import { RiShareCircleLine } from 'react-icons/ri';
import { useStateContext } from "../context";
import { motion } from "framer-motion";





function Card(props) {
  const { id, name, imageUrl, lien } = props.data;

  return (
    <Link to={`/${lien}/${name}`}>
      <motion.div
        className="bg-white relative border-2 h-[200px] drop-shadow-md rounded-xl overflow-hidden "
        animate={{ y: 0, opacity: 1, transition: { duration: 1, default: { duration: 1, ease: [0, 0.71, 0.2, 1.01] } } }} initial={{ y: -6000, opacity: 1 }}
       
      >
        <img className="w-full h-full shadow-inner object-cover transition duration-300 transform hover:scale-110" src={imageUrl} alt={name} />
        <div className=" w-full absolute h-[20%] top-[40%] text-center bg-white dark:bg-secondary-dark-bg">
          <p className="text-2xl  text-gray-800">{name}</p>
        </div>
      </motion.div >
    </Link >
  );
}

export function PortList({ lien }) {
  
  return (

    <div className="z-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-10  bg-transparent  px-[100px]">
      {listPort.map((card, index) => (<Card data={{ ...card, lien: lien }} />))}
    </div>
  );

}

