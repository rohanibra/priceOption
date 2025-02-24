import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
    const [open,setOpen]= useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      


    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose>:<HiMenuAlt1 ></HiMenuAlt1>
                }
                
            </div>
            <ul className={`md:flex absolute duration-1000  md:static
            ${open? 'top-16':'-top-60'} bg-yellow-200 px-6`}>
            {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;