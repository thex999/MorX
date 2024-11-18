
import React from 'react'

import Navbar from '@/components/global/navbar'
import Footer from "@/components/global/Footer";
import './(pages)/css/additional-styles/theme.css'
type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">

<Navbar />

          
          {props.children}</div>
   
  )
}
export default Layout
