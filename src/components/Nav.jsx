import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex bg-slate-200 px-8'>
        <div className='w-[22vw] items-center flex '>
            <img src="" alt="" /><p>Logo</p>
        </div>
        <div className='w-[80vw] flex items-center justify-between py-4 uppercase font-bold'>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >Home</Link>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >Messangers Bags</Link>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >Totes</Link>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >BagPacks</Link>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >Duffel Bags</Link>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >Dopp Kits</Link>
            <Link to="/" className='hover:text-[#75A500] font-semibold text-sm' >Journals</Link>
            <HiOutlineShoppingBag />

            
        </div>

    </div>
  )
}

export default Nav