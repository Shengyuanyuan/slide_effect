import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className="w-[1140px] max-w-[80%] m-auto h-[50px] flex items-center relative z-[100]">
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="text-white mr-10">
                {link.label}
            </Link>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
