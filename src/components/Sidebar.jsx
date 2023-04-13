import React from 'react';
import { motion  } from 'framer-motion'
import { links } from '../data';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const activeLink = 'flex items-center justify-start gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg h-16  bg-[#03C9D7]  text-white  text-md m-2 ';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <motion.div
            animate={{ width: "288px", transition: { duration: .3, type: "spring" } }}
            initial={{ width: 0 }}
            exit={{ width: 0 }}
            className="fixed shadow-xl rounded-md border-2 bg-white  w-[188px]  top-[63px] left-1 z-20 "
        >
            <div className="mt-10 ">
                {links.map((item) => (
                    <div key={item.title}>
                        <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                            {item.title}
                        </p>
                        {item.links.map((link) => (
                            <div className={activeLink}>
                                {link.icon }
                            <span className="capitalize ">{link.name2}</span></div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};