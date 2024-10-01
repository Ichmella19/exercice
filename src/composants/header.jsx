import React from 'react'
import { navbar } from '../mockData/data'
import { FaCode } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
const header = () => {
    const [open, setOpen] = React.useState(false);
  return (
   <nav>
    <div className="container flex justify-between items-center py-8">
        <div className='text-2xl flex items-center gap-2 font-bold uppercase '>
            <FaCode/>
            <p>Coders</p>
            <p className='text-secondary'>Gym</p>
        </div>
     <div className='hidden md:block'>
         <ul className='flex items-center gap-6 text-gray-600'>
          {
            navbar.map(item => 
              <li key={item.id}>
                <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold '>{item.title}</a>
              </li>
            )

  
          }
         </ul>
        </div>
        <div className='flex items-center gap-4'>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
            <CiSearch />
          </button>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
            <CiShoppingCart/>
          </button>
          <button className='hover:bg-primary text-primary font-semibold rounded-md border-2 border-primary px-6 py-2 duration-200 hover:text-white hidden md:block' >
            Login
          </button>
        </div>
        <div className='md:hidden' onClick={() => 
           setOpen(!open)}>
         <MdMenu className='text-4xl'/>
        </div>
    </div>op
    <ResponsiveMenu open={open}/>
   </nav>
   

  )
}

export default header