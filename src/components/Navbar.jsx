import { useStateContext } from '../context';
import React, { useEffect, CSSProperties } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown, MdOutlineCancel } from 'react-icons/md';
import { motion } from 'framer-motion';

const NavButton = ({ customFunc, icon, color }) => (
    <motion.button
        layoutId="test1"
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full  "
    >
        {icon}
    </motion.button>
);



export const Navbar = () => {
    const currentColor = "black"
    const { activeMenu, setActiveMenu } = useStateContext()
    function handleActiveMenu() { setActiveMenu(!activeMenu) }
    const activeLink = "border-b-4 border-red-300 h-full w-1/4 text-center"
    const normalLink = "border-0  h-full w-1/4 text-center"

    return (
        <div className="fixed  z-20  top-0 bg-white  drop-shadow-md  flex justify-between items-start  xl:h-[60px] md:h-[100px] sm:h-[100px] w-full px-6 ">
            <div>{activeMenu ? (
                <motion.div className="absolute left-6 top-6">
                    <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<MdOutlineCancel className='hover:fill-red-300' />} />
                </motion.div>
            ) : (
                <motion.div className="absolute left-6 top-6">
                    <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu className='hover:fill-red-300' />} />
                </motion.div>
            )}
                <div className="absolute left-0 right-0 bottom-0 mx-auto   text-lg flex justify-around w-[400px] h-[60px] items-center">
                    {/* <NavLink to="/schedule" key={1} activeClassName={activeLink} className={normalLink}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/ship" key={2} activeClassName={activeLink} className={normalLink}>
                        Table
                    </NavLink>
                    <NavLink to="/list" key={3} activeClassName={activeLink} className={normalLink}>
                        Calendar
                    </NavLink> */}
                </div>

                <div className="absolute right-10 top-1 flex h-[60px]   gap-10 justify-between items-center w-[250px]">
                    <NavButton title="Settings" color={currentColor} icon={<FiSettings className='hover:fill-red-300' />} />
                    <NavButton title="Chat" color={currentColor} icon={<BsChatLeft className='hover:fill-red-300' />} />
                    <NavButton title="Notification" color={currentColor} icon={<RiNotification3Line className='hover:fill-red-300' />} />
                    <img className={`rounded-full w-8 h-8 border-2 border-[${currentColor}]`} src={"https://th.bing.com/th/id/OIP.B4Y5_MhDT7ZcYEEaLDi-pgHaLH?pid=ImgDet&rs=1"} alt="user-profile" />
                </div>
            </div>
        </div>
    );
};

