import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 py-4 px-4 bg-white backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-[#91a3b0] justify-between">
    <aside className="flex items-center gap-[2px] ">
       
      <Link href="/">
     
      <h6 className="font-bold text-black text-[20px] italic">
        <span>Mor</span>
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            X
          </span>
          <span className="absolute inset-0 text-black opacity-70">X</span>
        </span>
      </h6>
      </Link>
      
    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block bg-gradient-to-r from-neutral-300 to-neutral-300 bg-clip-text text-transparent">
      
    </nav>
    <aside className="flex items-center gap-4">
      <a href='tel:'>
      <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black   text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Get Started
</button>
</a>


      <div className="flex items-center justify-center flex-col gap-4">
        
        
       
      </div>
        {/* --- <MobileMenu />-------INFINITE CARD MOVE-- */}
  
    </aside>
  </header>
  )
}
export default Navbar
