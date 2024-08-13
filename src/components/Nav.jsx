import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex bg-slate-200 px-8'>
        <div className='w-[22vw] items-center flex '>
            <img src="" alt="" /><p>Logo</p>
        </div>
        <div className='w-[80vw] flex items-center justify-between py-4 uppercase font-semibold'>
            <Link to="/" className='hover:text-[#75A500]' >Home</Link>
            <Link to="/" className='hover:text-[#75A500]' >Messangers Bags</Link>
            <Link to="/" className='hover:text-[#75A500]' >Totes</Link>
            <Link to="/" className='hover:text-[#75A500]' >BagPacks</Link>
            <Link to="/" className='hover:text-[#75A500]' >Duffel Bags</Link>
            <Link to="/" className='hover:text-[#75A500]' >Dopp Kits</Link>
            <Link to="/" className='hover:text-[#75A500]' >Journals</Link>
            <HiOutlineShoppingBag />

            
        </div>

    </div>
  )
}

export default Nav